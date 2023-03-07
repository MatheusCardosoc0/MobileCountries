import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface FormProps {
  children: ReactNode
  title: string
}

const Form = ({ children, title }: FormProps) => {
  return (
    <View className='flex flex-col w-[90%] p-2 bg-blue-700 rounded-lg'>
      <View className='flex flex-col gap-4'>
        <Text className='text-3xl text-gray-200 font-bold mb-4'>
          {title}
        </Text>
        {children}
      </View>
    </View>
  )
}

export default Form