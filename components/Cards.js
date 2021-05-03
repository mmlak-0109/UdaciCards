import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';

const Cards = ({ route, navigation }) => {
  const { id } = route.params
  const deck = useSelector(state => state.decks[id])
  return (
    <View>
      <HeaderBar 
        title='Cards'
        handlePress={() => navigation.navigate('Home')} />
      <Text>{JSON.stringify(deck)}</Text>
    </View>
  )
}

export default Cards