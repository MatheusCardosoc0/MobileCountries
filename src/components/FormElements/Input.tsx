import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'

interface InputProps extends TextInputProps{}

const Input = ({...rest}: InputProps) => {
  return (
    <TextInput className='bg-black rounded-lg p-2 text-white' placeholderTextColor={"#f2e9e9"}
    {...rest} />
  )
}

export default Input