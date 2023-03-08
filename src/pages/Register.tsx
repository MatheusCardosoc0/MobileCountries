import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeWindStyleSheet } from 'nativewind'
import { ButtonElement, Form, Input } from '../components/FormElements'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ParamsListSigInRoutes } from '../routes/SigIn.routes'
import { useDataContext } from '../context/AuthContextUser'

const Register = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamsListSigInRoutes>>()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { Register } = useDataContext()

  async function registerUser(){
    if (!email.includes('@')) return alert("Email invalido")

    if (password == '') return alert("Preencha a senha!")

    if(name == '') return alert("Preencha o nome!")

    await Register(email, name, password)

    navigation.push("Login")
  }

  return (
    <SafeAreaView className='className="w-full h-full flex items-center justify-center bg-zinc-800'>
      <Form title='Cadastre-se'>
        <View className='flex flex-col gap-2'>
          <Input placeholder='Seu nome' onChangeText={setName}
          value={name}/>

          <Input placeholder='Seu email' onChangeText={setEmail}
          value={email}/>

          <Input placeholder='Sua senha' onChangeText={setPassword}
          value={password}/>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className='font-bold text-white'>Já possui uma conta?</Text>
        </TouchableOpacity>

        <ButtonElement title='Entrar' onPress={registerUser} />
      </Form>
    </SafeAreaView>
  )
}

export default Register