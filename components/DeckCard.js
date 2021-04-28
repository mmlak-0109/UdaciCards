import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DeckCard = ({item}) => {
  return (
    <View>
      <Pressable style={styles.deckBtn}>
        <Text>{item.title}</Text>
        <Text> ({item.cardCount} Cards)</Text>
        <Feather name="chevron-right" size={24} color="blue" />
      </Pressable>
    </View>
  )
}

export default DeckCard

const styles = StyleSheet.create({
  deckBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 6,
    padding: 18,
    marginHorizontal: 24,
    marginBottom: 12,
  }
})