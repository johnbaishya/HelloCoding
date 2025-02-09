import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'
import AppHeaders from '../../Components/Header/AppHeaders';
import { FloatingButton } from '../../Components/Button';
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

export default function ProjectList() {
    const {colors} = useTheme();
    const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:colors.background}}>
        <AppHeaders title='Projects'/>
        <ScrollView contentContainerStyle={{width:"100%"}}>

        </ScrollView>
        <FloatingButton
            onPress={()=>{
                navigation.navigate("CodeLabScreen" as never);
            }}
        >
            {/* <Text>asd</Text> */}
            <FeatherIcon name='plus' size={35}/>
        </FloatingButton>
    </View>
  )
}