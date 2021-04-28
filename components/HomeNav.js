import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Stats from './Stats';

const HomeTabs = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <HomeTabs.Navigator initialRouteName='Home'>
      <HomeTabs.Screen name='Home' component={Decks} />
      <HomeTabs.Screen name='Add Deck' component={AddDeck} />
      <HomeTabs.Screen name='Stats' component={Stats} />
      {/* <Ionicons name="home" size={24} color="black" />
      <MaterialCommunityIcons name="plus-circle" size={24} color="black" />
      <Ionicons name="stats-chart" size={24} color="black" /> */}
    </HomeTabs.Navigator>
  )
}

export default HomeNav