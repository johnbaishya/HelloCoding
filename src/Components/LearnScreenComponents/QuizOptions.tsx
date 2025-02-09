import { View, Text } from 'react-native'
import React from 'react'
import EachQuizOption from './EachQuizOption'

export default function QuizOptions() {
  return (
    <View>
      <EachQuizOption selected/>
      <EachQuizOption/>
      <EachQuizOption/>
      <EachQuizOption/>
    </View>
  )
}