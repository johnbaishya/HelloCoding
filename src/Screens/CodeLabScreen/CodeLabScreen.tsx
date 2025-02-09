import { View } from 'react-native'
import React from 'react'
import AppStyles from '../../Styles/appStyles'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Text, useTheme } from 'react-native-paper'
import AppHeaders from '../../Components/Header/AppHeaders'
import Codelab from '../../Components/CodeLab/Codelab'
import { CustomButton } from '../../Components/Button'
import { setContentState } from '../../Redux/storeActions'

export default function CodeLabScreen() {
  const {colors}:CustomThemeProp = useTheme();
  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
      <AppHeaders title='CodeLab'/>
      <View style={{flex:1}}>
        <Codelab/>
        <View style={{width:"100%",height:60, padding:5, backgroundColor:colors.surface,borderTopColor:colors.outline, borderTopWidth:2}}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <CustomButton style={{backgroundColor:colors.secondary}}
              onPress={()=>{
                setContentState({CodeLabScreenIndex:3});
              }}
            >
            <Text variant='titleLarge' style={{textAlign:"center" }}>See Result</Text>
            </CustomButton>
            <CustomButton>
            <Text variant='titleLarge' style={{textAlign:"center"}}>Save</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </View>
  )
}