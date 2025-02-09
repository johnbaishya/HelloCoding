import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import moduleStyles from '../../Styles/ComponentStyles/moduleStyles'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Text, useTheme } from 'react-native-paper';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native';
import { Module } from '../../Types/contentTypes';
import { setContentState } from '../../Redux/storeActions';
import { isSelectedModule } from '../../Utils/courseUtil';

type ModuleBoxProp = {
  data:Module
}
export default function ModuleBox(props:ModuleBoxProp) {
    const {colors}:CustomThemeProp = useTheme();
    const navigation = useNavigation();
    const data = props.data;
    const selected = isSelectedModule(data);
  return (
    <TouchableOpacity 
        style={[moduleStyles.moduleBox,
          {
            backgroundColor:colors.surface,
            opacity:data.unlocked?1:0.5, 
            borderColor:selected?colors.primary:colors.outline, 
            borderWidth:selected?2:0.5,
            // shadowColor:colors.primary,
          }]}
        onPress={()=>{
            setContentState({selectedModule:data})
            navigation.navigate("LessonScreen" as never);
            // navigation.navigate("QuizScreen" as never);
        }}
        disabled={!data.unlocked}
        activeOpacity={0.8}
    >
      <View style={{backgroundColor:colors.primary, position:"absolute", height:"200%", width:"150%", overflow:"hidden",opacity:selected?0.2:0}} />
        <MaterialIcon name='comment-question' size={35} color={colors.primary}/>
        <Text  style={[moduleStyles.moduleBoxTitle]}variant='titleMedium'>{data.name}</Text>
            {data.completed?<FontAwesomeIcon name='check' color={colors.primary} size={25}/>:null}
            {!data.unlocked?<FontAwesomeIcon name='lock' color={colors.textLight} size={25}/>:null}
    </TouchableOpacity>
  )
}