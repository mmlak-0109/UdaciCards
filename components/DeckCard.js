import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DeckCard = ({item}) => {
  return (
    <View>
      <Pressable>
        <Text>{item.title}</Text>
        <Text>{item.cardCount} Cards</Text>
        <Feather name="chevron-right" size={24} color="black" />
      </Pressable>
    </View>
  )
}

export default DeckCard