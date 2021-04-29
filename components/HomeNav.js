import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Stats from './Stats';

const HomeTabs = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'
      return <Ionicons name={iconName} size={24} color="#00BCD4" />
    }
    if (route.name === 'Add Deck') {
      iconName = focused ? 'plus-circle' : 'plus-circle-outline'
      return <MaterialCommunityIcons name={iconName} size={24} color="#00BCD4" />
    }
    if (route.name === 'Stats') {
      iconName = focused ? 'stats-chart' : 'stats-chart-outline'
      return <Ionicons name={iconName} size={24} color="#00BCD4" />
    }
  }
})

const HomeNav = () => {
  return (
    <HomeTabs.Navigator initialRouteName='Home' screenOptions={screenOptions}>
      <HomeTabs.Screen name='Home' component={Decks} />
      <HomeTabs.Screen name='Add Deck' component={AddDeck} />
      <HomeTabs.Screen name='Stats' component={Stats} />
    </HomeTabs.Navigator>
  )
}

export default HomeNav