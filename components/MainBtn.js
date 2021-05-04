import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

const MainBtn = ({ onPress }) => {
  return (
    <Pressable 
      onPress={onPress}
      style={styles.btn}
    >
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>Submit</Text>
    </Pressable>
  )
}

export default MainBtn

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: "#00BCD4",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 75,
  }
})