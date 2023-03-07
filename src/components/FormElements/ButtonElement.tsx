import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface ButtonElementProps extends TouchableOpacityProps {
  title: string
}

const ButtonElement = ({ title, ...rest }: ButtonElementProps) => {
  return (
    <TouchableOpacity className='w-[40%] bg-green-500 rounded-lg p-2 border-2 border-dotted border-teal-900'
      {...rest}>
      <Text className='text-2xl text-center font-bold text-gray-100'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonElement