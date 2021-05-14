import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
import { createStore } from 'redux';
import { rootReducer } from '../reducers';
import { initializeData, resetData } from '../utils/api';
import { useDispatch } from 'react-redux';
import { receiveDecks } from '../actions';
import { setLocalNotification } from '../utils/helpers';
import { primary } from '../utils/colors';

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
      <SafeAreaView style={{flex: 1, backgroundColor: primary}}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


