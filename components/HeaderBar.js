import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderBar = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00BCD4'    
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    fontSize: 30
  }
})