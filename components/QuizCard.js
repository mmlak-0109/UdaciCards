import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const QuizCard = ({ question, answer }) => {
  const [modalVisible, setModalVisible] = useState(true);

  if (modalVisible) {
    return (
      <View>
        <View style={styles.modalView}>
          <Text>{question}</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.btn}
          >
            <Text style={styles.btnText}>Flip Card</Text>
          </Pressable>
        </View>
      </View>
    )
  } else {
    return (
      <View>
        <View style={styles.modalView}>
          <Text>{answer}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable
            // onPress={onPress}
            style={styles.correctBtn}
          >
            <Text style={styles.btnText}>Correct</Text>
          </Pressable>
          <Pressable
            // onPress={onPress}
            style={styles.incorrectBtn}
          >
            <Text style={styles.btnText}>Incorrect</Text>
          </Pressable>
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
    paddingLeft: 100,
    paddingRight: 100,
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
  btn:{
    marginTop: 80,
    marginBottom: 20
  },
  btnText: {
    color: '#00BCD4',
    textAlign: 'center'
  },
  correctBtn: {
    marginTop: 80,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderWidth: 2
  },
  incorrectBtn: {
    marginTop: 80,
    marginBottom: 20,
    borderWidth: 2
  }
});