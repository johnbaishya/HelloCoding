import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import EachQuizOption from './EachQuizOption'
import { QuizModule, QuizOption } from '../../Types/contentTypes';
import { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';

type QuizOptionsProps = {
  onOptionSelected:(ans:boolean)=>void
}

export default function QuizOptions(props:QuizOptionsProps) {
  const {selectedModule} = useSelector((state:RootState)=>state.content);
  const {question,options,correctAnswer} = selectedModule as QuizModule;
  const [selectedOption,setSelectedOption] = useState<QuizOption>({});
  const {onOptionSelected} = props;

  useEffect(()=>{
    setSelectedOption({} as QuizOption)
  },[options,correctAnswer])

  const selectOption  = (option:QuizOption)=>{
    onOptionSelected(option.name == correctAnswer);
    setSelectedOption(option);
  }
  return (
    <View>
      {options.map((item)=>{
        return(
        <EachQuizOption 
          data={item} 
          selected={item.name == selectedOption.name} 
          onPress={selectOption}
        />)
      })}
    </View>
  )
}