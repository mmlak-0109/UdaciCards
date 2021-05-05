import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import InputBox from './InputBox';

const CardModal = ({ id, question, answer, visable, onPress }) => {
  const initialQuestion = question
  const initialAnswer = answer

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
            <Text>Cancel</Text>
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});