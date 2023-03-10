import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { useDataContext } from '../../context/AuthContextUser'

interface InputProps extends TextInputProps{
  stylish?: string
}

const Input = ({ stylish ,...rest}: InputProps) => {

  const {isWhiteMode} = useDataContext()

  return (
    <TextInput className={`${isWhiteMode? 'bg-black text-white': 'bg-white text-black'} rounded-lg p-2 ${stylish}`} placeholderTextColor={isWhiteMode? "#d7d2d2": "#2e2d2d"}
    {...rest} />
  )
}

export default Input