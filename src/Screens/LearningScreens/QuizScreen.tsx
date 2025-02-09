import { View, ScrollView } from 'react-native'
import React from 'react'
import AppStyles from '../../Styles/appStyles'
import { Text, useTheme } from 'react-native-paper'
import AppHeaders from '../../Components/Header/AppHeaders';
import QuizOptions from '../../Components/LearnScreenComponents/QuizOptions';
import { CustomButton } from '../../Components/Button';
import { CustomThemeProp } from '../../Types/themeTypes';

export default function QuizScreen() {
    const {colors}:CustomThemeProp = useTheme();
  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
        <AppHeaders/>
        <ScrollView contentContainerStyle={{padding:10}}>
            <Text variant='titleMedium'>
                This is the question please select an correct answer. lets make this question a bit longer so that we can test easilu ?
            </Text>
            <QuizOptions/>
        </ScrollView>
        <View style={{width:"100%",height:70, padding:5, backgroundColor:colors.card,borderTopColor:colors.outline, borderTopWidth:2}}>
            <CustomButton>
            <Text variant='titleLarge' style={{textAlign:"center"}}>SUBMIT</Text>
            </CustomButton>
        </View>
    </View>
  )
}