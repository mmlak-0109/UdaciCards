import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HeaderBar = ({ title, handlePress}) => {
  return (
    <View style={styles.container}>
      {title === 'Cards'
        ? <MaterialCommunityIcons 
            name="chevron-left-circle"
            size={24}
            color="white"
            onPress={handlePress}/>
        : <Text></Text>
      }
      <Text style={styles.text}>{title}</Text>
      <Text></Text>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#00BCD4'    
  },
  text: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
    fontSize: 30
  }
})