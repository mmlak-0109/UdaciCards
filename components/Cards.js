import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';
import QuestionCard from './QuestionCard';

const Cards = ({ navigation, id}) => {
  const deck = useSelector(state => state.decks[id])

  // const dispatch = useDispatch()

  // const onDeleteDeck = () => {
  //   deleteDeckAsync(id)
  //   dispatch(deleteDeckState(id))
  //   navigation.navigate('Decks')
  // }

  // const onDeleteCard = () => {
  //   deleteCardAsync(id)
  //   dispatch(deleteCardState(id))
  //   navigation.navigate('Decks')
  // }

  const renderItem = ({ item }) => {
    return (
      <QuestionCard 
        item={item}
        id={id}
      />
    )
  }

  return (
    <View style={styles.container}>
      <HeaderBar 
        title='Cards'
        handlePress={() => navigation.navigate('Home')}
        // onDelete={onDeleteDeck}
      />
      <View style={styles.topCard}>
        <Text>Created: {deck.dateCreated}</Text>
        <Text>{deck.cardCount} Cards</Text>
      </View>
      <FlatList 
        data={deck.questions}
        renderItem={renderItem}
        keyExtractor={(question) => question.id}
        style={styles.list}
      />
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topCard: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 25,
  },
})