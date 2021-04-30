import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateUID } from './helpers'
import {DECKS_STORAGE_KEY, decks } from './_DATA'

export const initializeData = async () => {
  try {
    let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    if (data === null) {
      data = decks
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    }

    data = JSON.parse(data)

  } catch(e) {
    console.log(e)
  }

  return data
}

export const getDecks = async () => {
  try {
    let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    return data
  } catch(e) {
    console.log(e)
  }
}