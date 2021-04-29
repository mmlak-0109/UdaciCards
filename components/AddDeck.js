import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import HeaderBar from './HeaderBar';

const AddDeck = () => {
  return (
    <View>
      <HeaderBar title='Add Deck'/>
      <TextInput placeholder='Enter Deck Name'/>
      <Pressable>
        <Text>Add Deck</Text>
      </Pressable>
    </View>
  )
}

export default AddDeck