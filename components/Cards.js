import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';

const Cards = ({ route, navigation }) => {
  const { id } = route.params
  const deck = useSelector(state => state.decks[id])

  const addEllipsis = (str) => {
    return (
      str.includes('?')
        ? str
        : `${str}...?`
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Pressable
          style={styles.questionCard}
          // onPress={handlePress}
        >
          <View>
            <Text>{addEllipsis(item.question.slice(0, 30))}</Text>
            <Text>{item.answer.slice(0, 30)}...</Text>
          </View>
          <View>
            <Text style={{color: '#00BCD4'}}>
              View/Edit
            </Text>
          </View>
        </Pressable>
      </View>
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
  questionCard: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
  }
})