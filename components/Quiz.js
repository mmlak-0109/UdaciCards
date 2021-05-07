import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { set } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';
import ProgressBar from './ProgressBar';
import QuizCard from './QuizCard';

const Quiz = ({ navigation, id }) => {
  const deck = useSelector(state => state.decks[id])

  const [currentCard, updateCurrentCard] = useState(1)
  const totalCards = deck.cardCount
  const pctFinished = Math.round((currentCard/totalCards)*100)

  const [modalVisible, setModalVisible] = useState(true);

  const onAnswerMark = () => {
    updateCurrentCard(currentCard + 1)
    setModalVisible(true)
  }

  const onQuit = () => {
    navigation.navigate('Cards', {
      screen: 'Cards',
      params: {id}
    })
    updateCurrentCard(1)
    setModalVisible(true)
  }

  if (currentCard <= totalCards) {
    const currentIndex = currentCard-1
    const currentQuestion = deck.questions[currentIndex].question
    const currentAnswer = deck.questions[currentIndex].answer

    return (
      <View style={styles.container}>
        <HeaderBar title='Quiz'/>
        <ProgressBar 
          currentCard={currentCard}
          totalCards={totalCards}
          pctFinished={pctFinished} 
        />
        <QuizCard
          question={currentQuestion}
          answer={currentAnswer}
          modalVisible={modalVisible}
          onCardFlip={setModalVisible}
          onAnswerMark={onAnswerMark}
        />
        <Pressable
          onPress={onQuit}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Quit?</Text>
        </Pressable>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text>Quiz Complete!</Text>
        <Pressable
          onPress={onQuit}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Exit</Text>
        </Pressable>
      </View>
    )
  }
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: {
    marginTop: 30,
    marginBottom: 20
  },
  btnText: {
    color: '#00BCD4',
    textAlign: 'center'
  },
});