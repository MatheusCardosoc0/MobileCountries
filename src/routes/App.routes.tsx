import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../pages/Main'
import CountryDetails from '../pages/CountryDetails'
import { Country } from '../@types/interfaces/CountryInterface'

export type ParamsListAppRoutes = {
  Main: undefined
  CountryDetails: {
    country: Country
  }
}

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name='Main' component={Main}
        options={{ headerShown: false }} />
      <Screen name='CountryDetails' component={CountryDetails}
        options={{ headerShown: false }} />
    </Navigator>
  )
}

export default AppRoutes