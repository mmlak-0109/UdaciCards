import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Stats from './Stats';

const HomeTabs = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'
      return <Ionicons name={iconName} size={24} color={color} />
    }
    if (route.name === 'Add Deck') {
      iconName = focused ? 'plus-circle' : 'plus-circle-outline'
      return <MaterialCommunityIcons name={iconName} size={24} color={color} />
    }
    if (route.name === 'Stats') {
      iconName = focused ? 'stats-chart' : 'stats-chart-outline'
      return <Ionicons name={iconName} size={24} color={color} />
    }
  },
  tabBarOptions: {
    activeTintColor: '#00BCD4',
    inactiveTintColor: '#00BCD4'
  }
})

const HomeNav = () => {
  return (
    <HomeTabs.Navigator initialRouteName='Home' screenOptions={screenOptions} >
      <HomeTabs.Screen name='Home' component={Decks} />
      <HomeTabs.Screen name='Add Deck' component={AddDeck} />
      {/* <HomeTabs.Screen name='Stats' component={Stats} /> */}
    </HomeTabs.Navigator>
  )
}

export default HomeNav

const styles = StyleSheet.create({
  text: {
    color: '#00BCD4'
  }
})