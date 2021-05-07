import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import DeckCard from './DeckCard'
import HeaderBar from './HeaderBar'


const Decks = ({ navigation }) => {
  const decks = useSelector(state => state.decks)

  const objectsToArray = (objects) => {
    return Object.keys(objects).reduce((obj, deck) => {
      return [...obj, objects[deck]];
    }, []);
  }

  const renderItem = ({ item }) => {
    return (
      <DeckCard
        item={item}
        handlePress={() => {
          const id = item.id
          navigation.navigate('Cards', {id})
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
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
  container: {
    flex: 1
  },
  list: {
    marginTop: 15
  }
})