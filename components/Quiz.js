import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';
import ProgressBar from './ProgressBar';
import QuizCard from './QuizCard';

const Quiz = ({ navigation, id }) => {
  const deck = useSelector(state => state.decks[id])

  const [currentCard, updateCurrentCard] = useState(1)
  const totalCards = deck.cardCount
  const pctFinished = Math.round((currentCard/totalCards)*100)

  const currentIndex = currentCard-1
  const currentQuestion = deck.questions[currentIndex].question
  const currentAnswer = deck.questions[currentIndex].answer


  return (
    <View style={{justifyContent: 'space-between'}}>
      <HeaderBar title='Quiz'/>
      <ProgressBar 
        currentCard={currentCard}
        totalCards={totalCards}
        pctFinished={pctFinished} 
      />
      <QuizCard
        question={currentQuestion}
        answer={currentAnswer}
      />
      <View>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Quit?</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  btn: {
  },
  btnText: {
    color: '#00BCD4',
    textAlign: 'center'
  },
});