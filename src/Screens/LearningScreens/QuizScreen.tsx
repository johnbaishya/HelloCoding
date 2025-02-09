import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AppStyles from '../../Styles/appStyles'
import { Snackbar, Text, useTheme } from 'react-native-paper'
import AppHeaders from '../../Components/Header/AppHeaders';
import QuizOptions from '../../Components/LearnScreenComponents/QuizOptions';
import { CustomButton } from '../../Components/Button';
import { CustomThemeProp } from '../../Types/themeTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { QuizModule } from '../../Types/contentTypes';
import CustomSnackbar from '../../Components/Modals/CustomSnackbar';
import { setAppState, setContentState } from '../../Redux/storeActions';
import { SnackbarType } from '../../Types/componentType';
import { getNextModule, isLastModuleInLevel, unlockNextModule } from '../../Utils/courseUtil';
import { useNavigation } from '@react-navigation/native';

export default function QuizScreen() {
    const {colors}:CustomThemeProp = useTheme();
    const {selectedModule} = useSelector((state:RootState)=>state.content);
    const {question,options,correctAnswer} = selectedModule as QuizModule;
    const [correctAnswerSelected,setCorrectAnswer] = useState<boolean>(false);
    const [submitSuccess,setSumbitSuccess] = useState<boolean>(false);
    const navigation = useNavigation();

    const findCorrectAnswerStatus = ( asn:boolean)=>{
        setCorrectAnswer(asn);
        console.log(asn)
    }

    const submitAnswer = ()=>{
        if(correctAnswerSelected){
            setAppState({
                showSnackbar:true,
                snackbarMessage:"Well Done ! you selected the correct answer",
                snackbarType:SnackbarType.success,
            });
            setSumbitSuccess(true);
        }else{
            setAppState({
                showSnackbar:true,
                snackbarMessage:"Opps! you selected the wrong answer",
                snackbarType:SnackbarType.error,
            });
            setSumbitSuccess(false);
        }
    };

  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
        <AppHeaders/>
        <ScrollView contentContainerStyle={{padding:10}}>
            <Text variant='titleMedium'>
                {question}
            </Text>
            <QuizOptions onOptionSelected={(ans)=>{findCorrectAnswerStatus(ans)}}/>
        </ScrollView>
        <View style={{width:"100%",height:70, padding:5, backgroundColor:colors.card,borderTopColor:colors.outline, borderTopWidth:2}}>
            {submitSuccess?
            <CustomButton
                 onPress={()=>{
                    setCorrectAnswer(false);
                    setSumbitSuccess(false);
                    unlockNextModule();
                    const notLlastModule = !isLastModuleInLevel(selectedModule);
                    if(notLlastModule){
                        setContentState({
                        selectedModule:getNextModule()
                        })
                    }else{
                        navigation.navigate("BottomNavigation" as never);
                    }
                    }}
            >
            <Text variant='titleLarge' style={{textAlign:"center"}}>Continue</Text>
            </CustomButton>:
            <CustomButton
                onPress={submitAnswer}
            >
            <Text variant='titleLarge' style={{textAlign:"center"}}>SUBMIT</Text>
            </CustomButton>
            }
        </View>
        <CustomSnackbar/>
    </View>
  )
}