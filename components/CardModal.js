import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import InputBox from './InputBox';

const CardModal = ({ deckId, itemId, question, answer, visable, onPress }) => {
  const initialQuestion = question
  const initialAnswer = answer

  // TODO: Impliment ability to edit question and answer
  const [questionState, updateQuestion] = useState(initialQuestion)
  const [answerState, updateAnswer] = useState(initialAnswer)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visable}
      onRequestClose={onPress}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{questionState}</Text>
          <Text>{answerState}</Text>
          <Pressable
            onPress={onPress}
          >
            <Text style={{color: '#00BCD4'}}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default CardModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});