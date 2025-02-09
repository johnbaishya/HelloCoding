import { ScrollView, View } from 'react-native'
import React from 'react'
import AppStyles from '../../Styles/appStyles'
import AppHeaders from '../../Components/Header/AppHeaders'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Headline, Text, useTheme } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import Markdown from 'react-native-markdown-display';
import { CustomButton } from '../../Components/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { getNextModule, isLastModuleInLevel, isNotLasitem, unlockNextModule } from '../../Utils/courseUtil'
import { setContentState } from '../../Redux/storeActions'
import { useNavigation } from '@react-navigation/native'
import { ModuleType } from '../../Types/contentTypes'
import LessonScreen from './LessonScreen'
import QuizScreen from './QuizScreen'

export default function LearningModuleScreen() {

const {selectedModule} = useSelector((state:RootState)=>state.content);
const {type} = selectedModule;
  return (
    <>
        {
            type==ModuleType.lesson?
            <LessonScreen/>
            :
            <QuizScreen/>
        }
    </>
    
  )
}