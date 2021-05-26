import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateUID } from './helpers'
import {DECKS_STORAGE_KEY, decks } from './_DATA'
import { Flashcard } from './helpers'
import dayjs from 'dayjs';

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

    let newCard: Flashcard = {
      id: UID,
      question: question,
      answer: answer,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: dayjs(Date.now()).toISOString(),
    }
  
    addQuestionDeck = {
      [id]: {
        ...addQuestionDeck,
        'cardCount': addQuestionDeck['cardCount'] + 1,
        'questions': [...addQuestionDeck['questions'], newCard]
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

// export const deleteDeckAsync = async (id) => {
//   try {
//     return AsyncStorage.removeItem(id)
//   } catch (error) {
//     console.log('deleteDeckAsync error', e)
//   }
// }

// export const deleteCardAsync = async ({ id, cardId }) => {
//   try {
//     let data = await AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     data = JSON.parse(data)
//     //   .then((results) => {
//     //     const data = JSON.parse(results)
//     //     data[key] = undefined
//     //     delete data[key]
//     //     AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//   } catch (error) {
//     console.log('deleteDeckAsync error', e)
//   }
// }