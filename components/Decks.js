import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import DeckCard from './DeckCard'
import HeaderBar from './HeaderBar'
import { initializeData } from '../utils/api';
import { useDispatch, useSelector} from 'react-redux';
import { receiveDecks } from '../actions';

const Decks = ({ navigation }) => {
  // const [storeReady, notifyStoreReady] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    initializeData()
      .then(decks => dispatch(receiveDecks(decks)))
  })

  const decks = useSelector(state => state.decks)
  console.log(decks)

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