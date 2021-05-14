import React from 'react';
import { TextInput } from 'react-native';
import { primary } from '../utils/colors';

const InputBox = ({ placeholder, value, refProp, autoFocus, blurOnSubmit, onChangeText, onSubmitEditing, multiline }) => {
  return (
    <TextInput 
      placeholder={placeholder}
      value={value}
      autoFocus={autoFocus}
      ref={refProp}
      onChangeText={onChangeText}
      blurOnSubmit={blurOnSubmit}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
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