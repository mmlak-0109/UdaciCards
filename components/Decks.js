import React from 'react'
import { FlatList, Text, View } from 'react-native'
import decks from '../utils/_DATA'
import DeckCard from './DeckCard'
import HeaderBar from './HeaderBar'

const Decks = () => {
  const objectsToArray = (objects) => {
    return Object.keys(objects).reduce((obj, deck) => {
      return [...obj, objects[deck]];
    }, []);
  }

  const renderItem = ({item}) => {
    return (
      <DeckCard item={item}/>
    )
  }

  return (
    <View>
      <HeaderBar title="Decks" />
      <Text> </Text>
      <FlatList
        data={objectsToArray(decks)}
        renderItem={renderItem}
        keyExtractor={(deck) => deck.id}
      />
    </View>
  )
}

export default Decks