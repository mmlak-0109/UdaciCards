import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { initializeData, resetData } from '../utils/api';
import { useDispatch } from 'react-redux';
import { receiveDecks } from '../actions';
import { setLocalNotification } from '../utils/helpers';

const store = createStore(rootReducer)

export default function RootComp() {
  const dispatch = useDispatch()

  useEffect(() => {
    // resetData()
    //   .then(initializeData())
    initializeData()
      .then(decks => dispatch(receiveDecks(decks)))
    setLocalNotification()
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#00BCD4'/>
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


