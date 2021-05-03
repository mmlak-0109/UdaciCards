import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewDecks } from '../actions';
import { saveNewDeck } from '../utils/api';
import HeaderBar from './HeaderBar';

const AddDeck = ({ navigation }) => {
  const initialDeckName = ''
  const [deckName, updateDeckName] = useState(initialDeckName)
  const dispatch = useDispatch()

  // How to send info to navigate and update deck name
  const resetState = () => {
    updateDeckName(initialDeckName)
  }

  const handleSubmit = () => {
    saveNewDeck(deckName)
      .then(newDeck => {
        dispatch(addNewDecks(newDeck))
        navigation.navigate('Cards', {
          screen: 'Cards',
          params: {id: newDeck.id}
        })
        resetState()
      })
  }

  return (
    <View>
      <HeaderBar title='Add Deck'/>
      <TextInput 
        placeholder='Enter Deck Name'
        value={deckName}
        onChangeText={updateDeckName} />
      <Pressable 
        onPress={handleSubmit}
      >
        <Text>Add Deck</Text>
      </Pressable>
    </View>
  )
}

export default AddDeck