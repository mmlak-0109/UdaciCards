import React from 'react';
import { TextInput } from 'react-native';

const InputBox = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={{marginHorizontal: 15, marginBottom: 15}} />
  )
}

export default InputBox