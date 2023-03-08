import { View, Text } from 'react-native'
import React from 'react'
import { useDataContext } from '../context/AuthContextUser'
import SigInRoutes from './SigIn.routes'
import AppRoutes from './App.routes'

const RoutesController = () => {

  const {isAuthenticated} = useDataContext()

  return (
    isAuthenticated? <AppRoutes /> : <SigInRoutes />
  )
}

export default RoutesController