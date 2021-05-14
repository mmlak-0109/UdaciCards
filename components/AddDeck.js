import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewDecks } from '../actions';
import { saveNewDeck } from '../utils/api';
import HeaderBar from './HeaderBar';
import InputBox from './InputBox';
import MainBtn from './MainBtn';

const AddDeck = ({ navigation }) => {
  const initialDeckName = ''
  const [deckName, updateDeckName] = useState(initialDeckName)
  const dispatch = useDispatch()

  const resetState = () => {
    updateDeckName(initialDeckName)
  }

  const handleSubmit = () => {
    saveNewDeck(deckName)
      .then(newDeck => {
        dispatch(addNewDecks(newDeck))

        const id = Object.keys(newDeck)[0]
        navigation.navigate('Cards', {id})
        
        resetState()
      })
  }

  return (
    <View>
      <HeaderBar title='Add Deck'/>
      <View style={styles.container}>
        <InputBox 
          placeholder='Enter Deck Name'
          value={deckName}
          autoFocus={true}
          blurOnSubmit={true}
          onChangeText={updateDeckName} />
        <MainBtn 
          onPress={handleSubmit}
          text='Submit' />
      </View>
    </View>
  )
}

export default AddDeck

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center'
  }
})