import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CardModal from './CardModal';
import InputBox from './InputBox';

const QuestionCard = ({ item, id}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const addEllipsis = (str) => {
    return (
      str.includes('?')
        ? str
        : `${str}...?`
    )
  }

  return (
    <View>
      <CardModal 
        deckId={id}
        itemId={item.id}
        question={item.question}
        answer={item.answer}
        visable={modalVisible}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Pressable
        style={styles.questionCard}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View>
          <Text>{addEllipsis(item.question.slice(0, 25))}</Text>
        </View>
        <View>
          <Text style={{color: '#00BCD4'}}>
            View
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default QuestionCard

const styles = StyleSheet.create({
  questionCard: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 25,
  },
})