import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HeaderBar from './HeaderBar';
import ProgressBar from './ProgressBar';
import QuizCard from './QuizCard';
import MainBtn from './MainBtn';


const Quiz = ({ navigation, id }) => {
  const deck = useSelector(state => state.decks[id])

  const [currentCard, updateCurrentCard] = useState(1)
  const totalCards = deck.cardCount
  const pctFinished = Math.round((currentCard/totalCards)*100)

  const [modalVisible, setModalVisible] = useState(true);

  const [currentScore, updateCurrentScore] = useState({'correct': 0, 'incorrect': 0})

  const onAnswerMark = (answerMark) => {
    updateCurrentScore({...currentScore, [answerMark]: currentScore[answerMark] + 1})
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
    updateCurrentScore({'correct': 0, 'incorrect': 0})
  }

  const onRestart = () => {
    setModalVisible(true)
    updateCurrentCard(1)
    updateCurrentScore({'correct': 0, 'incorrect': 0})
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
    const finalScore = (currentScore['correct'] / totalCards) * 100
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <Text style={[styles.txt, {fontSize: 30, fontWeight: 'bold'}]}>
          Quiz Complete!
        </Text>
        <Text style={[styles.txt, {fontSize: 20}]}>
          Your Score:
        </Text>
        <Text style={[styles.txt, {fontSize: 20}]}>
          {finalScore}%
        </Text>
        <View style={{marginTop: 20}}>
          <MainBtn 
            onPress={onRestart}
            text='Restart'
          />
          <MainBtn 
            onPress={onQuit}
            text='Exit'
          />
        </View>
      </View>
    )
  }
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    marginTop: 30,
    marginBottom: 20
  },
  btnText: {
    color: '#00BCD4',
    textAlign: 'center'
  },
  txt: {
    textAlign: 'center'
  }
});