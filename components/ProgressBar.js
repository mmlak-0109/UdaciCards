import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProgressBar = ({ currentCard, totalCards, pctFinished }) => {
  const barContainer = {
    height: '100%',
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  }

  const optionOneBar = {
    height: '100%',
    width: `${pctFinished}%`,
    backgroundColor: '#00b5d6',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <View style={{marginVertical: 15}}>
      <Text style={styles.text}>
        Card {currentCard}/{totalCards}
      </Text>
      <View style={styles.barContainer}>
        <View style={styles.optionOneBar}></View>
      </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  barContainer: {
    // height: '100%',
    // width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  },
  optionOneBar: {
    // height: '100%',
    // width: `${pctFinished}%`,
    backgroundColor: '#00b5d6',
    borderRadius: 50,
    textAlign: 'right'
  }
})