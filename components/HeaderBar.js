import React from 'react'
import { Text, View } from 'react-native'

const HeaderBar = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default HeaderBar