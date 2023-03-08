import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from '../pages/Main'

export type ParamsListAppRoutes = {
  Main: undefined
}

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name='Main' component={Main}
        options={{ headerShown: false }} />
    </Navigator>
  )
}

export default AppRoutes