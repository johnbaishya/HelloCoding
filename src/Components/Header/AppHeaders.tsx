import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import appHeaderStyles from '../../Styles/ComponentStyles/appHeaderStyles'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Appbar, Text, useTheme } from 'react-native-paper'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native'

type AppHeaderProp = {
    title? :string,
}

export default function AppHeaders(props:AppHeaderProp) {
    const {colors}:CustomThemeProp = useTheme();
    const navigation = useNavigation();
    const {title ="Hello Coding"} = props;
  return (
    // <View style={[appHeaderStyles.headerContainer,{backgroundColor:colors.card, borderBottomColor:colors.outline}]}>
    //     <TouchableOpacity 
    //         onPress={()=>{
    //             navigation.goBack();
    //         }}
    //         style={[appHeaderStyles.headerLefticon]}
    //     >
    //         <FontAwesomeIcon name='angle-left' size={35} color={colors.label}/>
    //     </TouchableOpacity>
    //     <Text variant='titleLarge'>
    //         {title}
    //     </Text>
    // </View>
    <Appbar.Header>
    <Appbar.BackAction onPress={() => {navigation.goBack()}} />
    <Appbar.Content title={title} />
    {/* <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} /> */}
  </Appbar.Header>
  )
}