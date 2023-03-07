import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeWindStyleSheet } from 'nativewind'
import { ButtonElement, Form, Input } from '../components/FormElements'
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types'
import { ParamsListSigInRoutes } from '../routes/SigIn.routes'

const SigIn = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamsListSigInRoutes>>()

  return (
    <SafeAreaView className='className="w-full h-full flex items-center justify-center bg-zinc-800'>
      <Form title='Cadastre-se'>
        <View className='flex flex-col gap-2'>
        <Input placeholder='Seu nome' />
          <Input placeholder='Seu email' />
          <Input placeholder='Sua senha' />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className='font-bold text-white'>Já possui uma conta?</Text>
         </TouchableOpacity>

        <ButtonElement title='Entrar' />
      </Form>
    </SafeAreaView>
  )
}

export default SigIn