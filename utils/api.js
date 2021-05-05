import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateUID } from './helpers'
import {DECKS_STORAGE_KEY, decks } from './_DATA'

export const resetData = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    
  }
}

export const initializeData = async () => {
  try {
    let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    if (data === null) {
      data = decks
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    }

    data = JSON.parse(data)

    return data

  } catch(e) {
    console.log('initializeData error', e)
  }
}

export const saveNewDeck = async (deckName) => {
  try {
    let UID = generateUID()
    let newDeck = {
      [UID]: {
        id: UID,
        title: deckName,
        dateCreated: new Date().toLocaleDateString(),
        cardCount: 0,
        questions: []
      }
    }
    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(newDeck))
    return newDeck
  } catch (e) {
    console.log('saveNewDeck error', e)
  }
}

export const saveNewCard = async ({ id, question, answer}) => {
  try {
    let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    data = JSON.parse(data)
  
    let addQuestionDeck = data[id]
    console.log('addQuestionDeck:', addQuestionDeck)
    let UID = generateUID()
  
    addQuestionDeck = {
      [id]: {
        ...addQuestionDeck,
        'cardCount': addQuestionDeck['cardCount'] + 1,
        'questions': [...addQuestionDeck['questions'], {id: UID, question: question, answer: answer}]
      }
    }
  
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify(addQuestionDeck)
    )
    return addQuestionDeck
  } catch (e) {
    console.log('saveNewCard error', e)
  }
}