import { View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import { CustomThemeProp } from '../../Types/themeTypes';
import { SIZES } from '../../Constants/themeConstants';

type EachQuizProps = {
    selected:boolean,
}

export default function EachQuizOption(props:EachQuizProps) {
    const {colors}:CustomThemeProp = useTheme();
  return (
    <View style={{
        backgroundColor:colors.card,
        borderRadius:SIZES.radius,
        marginVertical:10,
        padding:10,
        borderColor:colors.primary,
        borderWidth:props.selected?2:0
        }}>
      <Text variant='titleMedium'>EachQuizOption lets say option is very long thatn the expected</Text>
    </View>
  )
}