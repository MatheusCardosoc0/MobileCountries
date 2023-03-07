import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login'
import SigIn from '../pages/SigIn'

export type ParamsListSigInRoutes = {
  Login: undefined
  SigIn: undefined
}

const { Navigator, Screen } = createNativeStackNavigator()

const SigInRoutes = () => {
  return (
    <Navigator>
      <Screen name='Login' component={Login}
        options={{ headerShown: false }} />
      <Screen name='SigIn' component={SigIn}
        options={{ headerShown: false }} />
    </Navigator>
  )
}

export default SigInRoutes