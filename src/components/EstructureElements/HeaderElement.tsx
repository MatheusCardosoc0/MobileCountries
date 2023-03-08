import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Input } from '../FormElements'
import {Ionicons} from '@expo/vector-icons'

const HeaderElement = () => {
  return (
    <View className='flex-row justify-between p-[3%] bg-zinc-900 items-center'>
      <View>
        <Text className='text-white text-2xl font-bold mb-4'>
          Galery Countries
        </Text>

        <View className='flex-row gap-[5%]'>
          <TouchableOpacity className='bg-white px-[4%] items-center justify-center rounded-lg'>
            <Text className='font-bold'>Todos</Text>
          </TouchableOpacity>
          <Input stylish='bg-white w-[40%] text-black font-bold'
          placeholder='Buscar...'
          placeholderTextColor={"#736c6c"} />
        </View>
      </View>

      <TouchableOpacity className='bg-white p-[4%] rounded-xl items-center'>
        <Ionicons name='md-sunny' size={34} />
        <Text className='font-bold'>white mode</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderElement