import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cards from './Cards';
import AddCard from './AddCard';
import Quiz from './Quiz';

const DeckTabs = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({ focused, color }) => {
    let iconName;

    if (route.name === 'Cards') {
      iconName = focused ? 'cards' : 'cards-outline'
      return <MaterialCommunityIcons name={iconName} size={24} color={color} />
    }
    if (route.name === 'Add Card') {
      iconName = focused ? 'plus-circle' : 'plus-circle-outline'
      return <MaterialCommunityIcons name={iconName} size={24} color={color} />
    }
    if (route.name === 'Quiz') {
      iconName = focused ? 'school' : 'school-outline'
      return <Ionicons name={iconName} size={24} color={color} />
    }
  },
  tabBarOptions: {
    activeTintColor: '#00BCD4',
    inactiveTintColor: '#00BCD4'
  }
})

const DeckNav = (props) => {
  const id = props.route.params.id

  return (
    <DeckTabs.Navigator screenOptions={screenOptions} >
      <DeckTabs.Screen name='Cards'>{(props) => <Cards {...props} id={id}/>}</DeckTabs.Screen>
      <DeckTabs.Screen name='Add Card'>{(props) => <AddCard {...props} id={id}/>}</DeckTabs.Screen>
      <DeckTabs.Screen name='Quiz'>{(props) => <Quiz {...props} id={id}/>}</DeckTabs.Screen>
    </DeckTabs.Navigator>
  )
}

export default DeckNav

const styles = StyleSheet.create({
  text: {
    color: '#00BCD4'
  }
})