import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { Provider } from 'react-redux';
import { initializeData } from '../utils/api';
import { useDispatch } from 'react-redux';
import { receiveDecks } from '../actions';

const store = createStore(rootReducer)

export default function RootComp() {
  // const [storeReady, notifyStoreReady] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    initializeData()
      .then(decks => dispatch(receiveDecks(decks)))
  })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


