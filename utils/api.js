import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateUID } from './helpers'
import {DECKS_STORAGE_KEY, decks } from './_DATA'

export const initializeData = async () => {
  try {
    let data = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
    console.log('data:', data)
    if (data === null) {
      data = decks
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    }

    data = JSON.parse(data)
    console.log('dataParsed:', data)

    return data

  } catch(e) {
    console.log('error', e)
  }
}