import React from 'react';
import { TextInput } from 'react-native';
import { primary } from '../utils/colors';

const InputBox = ({ placeholder, value, onChangeText }) => {
  return (
    <TextInput 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline
      style={{
        marginHorizontal: 25,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: primary,
        borderRadius: 5
        }} />
  )
}

export default InputBox