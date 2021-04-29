import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import decks from '../utils/_DATA'
import DeckCard from './DeckCard'
import HeaderBar from './HeaderBar'

const Decks = ({ navigation }) => {
  const objectsToArray = (objects) => {
    return Object.keys(objects).reduce((obj, deck) => {
      return [...obj, objects[deck]];
    }, []);
  }

  const renderItem = ({item}) => {
    return (
      <DeckCard
        item={item}
        handlePress={() => navigation.navigate("Cards")} 
      />
    )
  }

  return (
    <View>
      <HeaderBar title="Decks" />
      <FlatList
        data={objectsToArray(decks)}
        renderItem={renderItem}
        keyExtractor={(deck) => deck.id}
        style={styles.list}
      />
    </View>
  )
}

export default Decks

const styles = StyleSheet.create({
  list: {
    marginTop: 15
  }
})