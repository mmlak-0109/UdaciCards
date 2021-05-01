import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './components/StackNav';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
