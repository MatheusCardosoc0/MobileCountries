import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Country } from '../../@types/interfaces/CountryInterface'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamsListAppRoutes } from '../../routes/App.routes'

const CountryCards = ({ country }: { country: Country }) => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamsListAppRoutes>>()

  return (
    <TouchableOpacity className='w-[28%] h-[120] rounded-xl bg-stone-800 my-1 overflow-hidden mx-2'
      onPress={() => navigation.push('CountryDetails', { country: country })}
      style={{
        shadowColor: '#000',
        shadowOpacity: 0,
        shadowOffset: { width: 3, height: 2 },
        shadowRadius: 4,
        elevation: 12,
      }}>
      <Image source={{ uri: country.flags.png }}
        style={{ width: 100, height: 100 }} />
      <Text className='text-white font-bold text-center'>{country.name.common}</Text>
    </TouchableOpacity>
  )
}

export default CountryCards