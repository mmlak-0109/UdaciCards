import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated'

const HeaderBar = ({ title, handlePress, onDelete}) => {
  if (title === 'Cards') {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons 
            name="chevron-left-circle"
            size={24}
            color="white"
            onPress={handlePress}
            style={{marginLeft: 10}}
        />
        <Text style={styles.text}>{title}</Text>
        <Pressable
          onPress={onDelete}
        >
          <Text style={styles.btnText}>Delete</Text>
        </Pressable>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>{title}</Text>
        <Text></Text>
      </View>
    )
  }
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
    marginVertical: 5,
    fontSize: 30,
    color: '#FFFFFF'
  },
  btnText: {
    color: '#FFFFFF',
    marginRight: 10
  },
})