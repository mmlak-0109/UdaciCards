import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DeckCard = ({ item, handlePress }) => {
  return (
    <View>
      <Pressable
        style={styles.deckBtn}
        onPress={handlePress}>
        <Text>{item.title} ({item.cardCount} Cards)</Text>
        <MaterialCommunityIcons name="chevron-right-circle" size={24} color="#00BCD4" />
      </Pressable>
    </View>
  )
}

export default DeckCard

const styles = StyleSheet.create({
  deckBtn: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 25,
    marginBottom: 15,
  }
})