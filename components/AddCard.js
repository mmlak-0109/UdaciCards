import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
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
  return (
    <View>
      <HeaderBar title='Add Card'/>
      <View style={styles.container}>
        <InputBox 
          placeholder='Enter Question'
          value={question}
          onChangeText={updateQuestion} />
        <InputBox 
          placeholder='Enter Answer'
          value={answer}
          onChangeText={updateAnswer} />
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