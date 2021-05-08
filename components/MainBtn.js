import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { primary } from '../utils/colors';

const MainBtn = ({ onPress, text }) => {


  return (
    <Pressable 
      onPress={onPress}
      style={styles.btn}
    >
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
        {text}
      </Text>
    </Pressable>
  )
}

export default MainBtn

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 75,
  }
})