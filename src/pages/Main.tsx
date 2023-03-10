import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { HeaderElement } from '../components/EstructureElements'
import { countryApi } from '../services/countryApi'
import { Country } from '../@types/interfaces/CountryInterface'
import { ButtonElement, Input } from '../components/FormElements'
import CountryCards from '../components/EstructureElements/CountryCards'
import { AntDesign } from '@expo/vector-icons'
import { useDataContext } from '../context/AuthContextUser'

const Main = () => {


  const [countryListNumber, setcountryListNumber] = useState(1)
  const { country, setCountry, setLoading, loading, isFilterActivate, Order, isWhiteMode } = useDataContext()

  async function GetCountries(isAvanced = true) {
    setLoading(true)
    try {
      const response = await countryApi.get('/all')

      const OrdenedBy = Order(response.data)


      setCountry(OrdenedBy.slice(0 + 21 * (countryListNumber - 1), 21 * countryListNumber))

      if (countryListNumber <= 1) {
        setcountryListNumber(1)
      }

      if (isAvanced) {
        setcountryListNumber(prev => prev + 1)
      } else {
        setcountryListNumber(prev => prev - 1)
      }

      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  async function AvancedListNumberCountry() {
    await GetCountries()
  }

  async function ReturnListNumberCountry() {
    await GetCountries(false)
  }

  async function converToString(number: string) {
    setcountryListNumber(Number(number))

    await GetCountries()
  }

  useEffect(() => {
    if (country.length == 0) {
      GetCountries()
    }
  }, [])


  return (
    <View className={`h-full ${isWhiteMode? 'bg-zinc-300': 'bg-zinc-600'}`}>
      <HeaderElement />

      <ScrollView className='' contentContainerStyle={{ paddingBottom: 200 }}>
        {country.length <= 0 || loading ? (
          <View className='flex-row justify-center items-center h-screen w-full'>
            <ActivityIndicator size={180} color="#0a16fa" />
          </View>
        ) : (
          <View>
            <View className='flex-row flex-wrap justify-center items-center pt-10'>
              {country.map(item => (
                <CountryCards key={item.name.official} country={item} />
              ))}
            </View>
          </View>
        )}

        {!isFilterActivate && (
          <View className="mx-auto mt-12 flex-row items-center">
            <TouchableOpacity onPress={ReturnListNumberCountry}
              disabled={countryListNumber <= 1}>
              <AntDesign name="caretleft" size={40} />
            </TouchableOpacity>
            <Input value={(countryListNumber).toString()}
              stylish={"text-center font-bold"}
              keyboardType={"decimal-pad"}
              onChangeText={converToString} />
            <TouchableOpacity onPress={AvancedListNumberCountry}>
              <AntDesign name="caretright" size={40} />
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>


    </View>
  )
}

export default Main