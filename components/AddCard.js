import React, { useState } from 'react';
import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewCard } from '../actions';
import { saveNewCard } from '../utils/api';
import HeaderBar from './HeaderBar';
import InputBox from './InputBox';
import MainBtn from './MainBtn';

const AddCard = ({ navigation, id}) => {
  const initialQuestion = ''
  const initialAnswer = ''
  const [question, updateQuestion] = useState(initialQuestion)
  const [answer, updateAnswer] = useState(initialAnswer)

  const dispatch = useDispatch()

  const resetState = () => {
    updateQuestion(initialQuestion)
    updateAnswer(initialAnswer)
  }

  const handleSubmit = () => {
    saveNewCard({ id, question, answer})
      .then(newQuestionDeck => {
        dispatch(addNewCard(newQuestionDeck))
        navigation.navigate('Cards', {
          screen: 'Cards',
          params: {id}
        })
        resetState()
      })
  }

  const answerRef = useRef()

  return (
    <View>
      <HeaderBar title='Add Card'/>
      <View style={styles.container}>
        <InputBox 
          placeholder='Enter Question'
          value={question}
          autoFocus={true}
          onChangeText={updateQuestion}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            answerRef.current.focus()}}
          multiline={false} />
        <InputBox 
          placeholder='Enter Answer'
          value={answer}
          refProp={answerRef}
          onChangeText={updateAnswer}
          multiline={true} />
        <MainBtn 
          onPress={handleSubmit}
          text='Submit'
        />
      </View>
    </View>
  )
}

export default AddCard

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    justifyContent: 'center'
  }
})