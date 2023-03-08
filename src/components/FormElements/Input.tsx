import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps{
  stylish?: string
}

const Input = ({ stylish ,...rest}: InputProps) => {
  return (
    <TextInput className={`bg-black rounded-lg p-2 text-white ${stylish}`} placeholderTextColor={"#f2e9e9"}
    {...rest} />
  )
}

export default Input