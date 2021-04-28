import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNav from './HomeNav';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName='Decks'>
      <Stack.Screen name='Decks' component={HomeNav} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default StackNav