import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { primary } from '../utils/colors';

const MainBtn = ({ onPress, text }) => {


  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.btn}
    >
      <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
        {text}
      </Text>
    </TouchableOpacity>
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