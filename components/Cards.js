import React from 'react';
import { Pressable, Text, View } from 'react-native';
import HeaderBar from './HeaderBar';

const Cards = ({ navigation }) => {
  return (
    <View>
      <HeaderBar 
        title='Cards'
        handlePress={() => navigation.navigate('Home')} />
      <Text>Cards</Text>
    </View>
  )
}

export default Cards