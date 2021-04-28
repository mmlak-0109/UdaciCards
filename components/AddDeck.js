import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const AddDeck = () => {
  return (
    <View>
      <TextInput placeholder='Enter Deck Name'/>
      <Pressable>
        <Text>Add Deck</Text>
      </Pressable>
    </View>
  )
}

export default AddDeck