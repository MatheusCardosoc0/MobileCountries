import { View, Text, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { NativeWindStyleSheet } from 'nativewind'
import { ButtonElement, Form, Input } from '../components/FormElements'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { ParamsListSigInRoutes } from '../routes/SigIn.routes'
import { useDataContext } from '../context/AuthContextUser'

const Login = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamsListSigInRoutes>>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {signIn} = useDataContext()

  async function loginUser(){
     if(!email.includes('@')) return alert("Email invalido")

     if(password == '') return alert("Preencha a senha!")

     await signIn(email, password)
  }

  return (
    <SafeAreaView className='className="w-full h-full flex items-center justify-center bg-zinc-800'>
      <Form title='Login'>
        <View className='flex flex-col gap-2'>
          <Input placeholder='Seu email' onChangeText={setEmail}
            value={email}
            textContentType={"emailAddress"} />

          <Input placeholder='Sua senha' onChangeText={setPassword}
            value={password}
            textContentType={"password"} />

        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SigIn")}>
          <Text className='font-bold text-white'>Não possui uma conta?</Text>
        </TouchableOpacity>

        <ButtonElement title='Entrar' onPress={loginUser} />
      </Form>
    </SafeAreaView>
  )
}

export default Login