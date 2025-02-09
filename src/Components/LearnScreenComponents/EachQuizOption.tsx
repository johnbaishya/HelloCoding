import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import { CustomThemeProp } from '../../Types/themeTypes';
import { SIZES } from '../../Constants/themeConstants';
import { QuizOption } from '../../Types/contentTypes';

type EachQuizProps = {
    selected:boolean,
    data:QuizOption,
    onPress:(option:QuizOption)=>void,
}

export default function EachQuizOption(props:EachQuizProps) {
    const {colors}:CustomThemeProp = useTheme();
    const {selected,data} = props;
  return (
    <TouchableOpacity 
    onPress={()=>{props.onPress(data)}}
    activeOpacity={0.8}
    style={{
          backgroundColor:colors.card,
          borderRadius:SIZES.radius,
          marginVertical:5,
          padding:10,
          borderColor:selected?colors.primary:colors.outline,
          borderWidth:selected?2:0.5,
          elevation:5,
          flexDirection:"row",
          justifyContent:"space-evenly",
          overflow:"hidden"
        }}>
          <View
            style={{
              position:"absolute",
              height:"200%",
              width:"200%",
              backgroundColor:colors.primary,
              opacity:selected?0.2:0
            }}
          />
      <Text variant='bodyLarge' style={{width:"auto"}}>{data.name} - </Text>
      <Text variant='titleMedium' style={{flex:1}}>{data.content}</Text>
    </TouchableOpacity>
  )
}