import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';
import QuestionCard from './QuestionCard';

const Cards = ({ navigation, id}) => {
  const deck = useSelector(state => state.decks[id])

  const renderItem = ({ item }) => {
    return (
      <QuestionCard 
        item={item}
      />
    )
  }

  return (
    <View style={styles.container}>
      <HeaderBar 
        title='Cards'
        handlePress={() => navigation.navigate('Home')} />
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
    marginBottom: 30,
  },
})