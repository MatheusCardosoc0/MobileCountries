import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
}

const AuthContext = createContext({} as initialState)

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState({} as userProps)

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
        token
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

  async function Register(email: string,  name: string, password: string) {

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


  return (
    <AuthContext.Provider value={{
      user,
      Register,
      signIn,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useDataContext = () => useContext(AuthContext)