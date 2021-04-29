import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import HeaderBar from './HeaderBar';

const AddCard = () => {
  return (
    <View>
      <HeaderBar title='Add Card'/>
      <TextInput placeholder='Enter Question'/>
      <TextInput placeholder='Enter Answer'/>
      <Pressable>
        <Text>Add Card</Text>
      </Pressable>
    </View>
  )
}

export default AddCard