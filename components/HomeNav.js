import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HomeNav = () => {
  return (
    <View>
      <Ionicons name="home" size={24} color="black" />
      <MaterialCommunityIcons name="plus-circle" size={24} color="black" />
      <Ionicons name="stats-chart" size={24} color="black" />
    </View>
  )
}

export default HomeNav