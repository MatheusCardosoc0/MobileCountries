import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Country } from "../@types/interfaces/CountryInterface";
import { api } from "../services/axiosConfig";

type userProps = {
  name: string
  id: string
  email: string
  token: string
}

type initialState = {
  user: userProps
  signIn: (email: string, password: string) => Promise<void>
  Register: (email: string, name: string, password: string) => Promise<void>
  isAuthenticated: boolean
  setCountry: React.Dispatch<React.SetStateAction<Country[]>>
  country: Country[]
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsFilterActivate: React.Dispatch<React.SetStateAction<boolean>>
  isFilterActivate: boolean
  setOrderBy: React.Dispatch<React.SetStateAction<string>>
  orderBy: string
  Order(response: Country[]): Country[]
}

const AuthContext = createContext({} as initialState)

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState({} as userProps)
  const [country, setCountry] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)
  const [isFilterActivate, setIsFilterActivate] = useState(false)
  const [orderBy, setOrderBy] = useState<string>('')

  const isAuthenticated = !!user.name

  useEffect(() => {
    async function getUser() {
      const userInfo = await AsyncStorage.getItem('@countries')
      let hasUser: userProps = JSON.parse(userInfo || '{}')

      const { email, id, name, token } = hasUser

      setUser({
        email,
        id,
        name,
        token,
      })
    }

    getUser()
  }, [])

  async function signIn(email: string, password: string) {

    try {
      const response = await api.post('/signIn', {
        email: email,
        password: password
      })

      console.log(response.data)

      const { name, id, token }: userProps = response.data

      const data = {
        ...response.data
      }

      await AsyncStorage.setItem('@countries', JSON.stringify(data))

      setUser({
        email,
        id,
        name,
        token
      })

    } catch (error: any) {
      console.log(error.message)
    }
  }

  async function Register(email: string, name: string, password: string) {

    try {
      await api.post('/register', {
        email: email,
        password: password,
        name: name
      })
    } catch (error) {
      console.log(error)

      alert("Email já cadastrado")
    }
  }

  function Order(response: Country[]) {
    if (orderBy == "Maior população") {
      const ordened = response.sort((a, b) => b.population - a.population)

      return ordened

    } else if (orderBy == "Menor população") {
      const ordened = response.sort((a, b) => a.population - b.population)

      return ordened

    } else if (orderBy == "Maior territorio") {
      const ordened = response.sort((a, b) => b.area - a.area)

      return ordened

    } else if (orderBy == "Menor territorio"){
      const ordened = response.sort((a, b) =>  a.area - b.area)

      return ordened
    } else {
      return response
    }
  }


  return (
    <AuthContext.Provider value={{
      user,
      Register,
      signIn,
      isAuthenticated,
      country,
      setCountry,
      loading,
      setLoading,
      isFilterActivate,
      setIsFilterActivate,
      orderBy,
      setOrderBy,
      Order
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useDataContext = () => useContext(AuthContext)