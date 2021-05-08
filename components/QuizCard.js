import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { correct, incorrect } from '../utils/colors';

const QuizCard = ({ question, answer, modalVisible, onCardFlip, onAnswerMark }) => {

  if (modalVisible) {
    return (
      <View>
        <View style={styles.modalView}>
          <Text style={{textAlign: 'center', justifyContent: 'center'}}>{question}</Text>
          <TouchableOpacity
            onPress={() => onCardFlip(!modalVisible)}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Show Answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return (
      <View>
        <View style={[styles.modalView, styles.modalViewAnswer]}>
          <Text style={{textAlign: 'center', justifyContent: 'center'}}>{answer}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => onAnswerMark('correct')}
            style={styles.correctBtn}
          >
            <Text style={styles.answerBtnText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity

            onPress={() => onAnswerMark('incorrect')}
            style={styles.incorrectBtn}
          >
            <Text style={styles.answerBtnText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default QuizCard

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    marginHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewAnswer: {
    paddingBottom: 100
  },
  btn:{
    marginTop: 80,
    marginBottom: 20
  },
  btnText: {
    color: '#00BCD4',
    textAlign: 'center'
  },
  answerBtnText: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  correctBtn: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    backgroundColor: correct
  },
  incorrectBtn: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 5,
    backgroundColor: incorrect
  }
});