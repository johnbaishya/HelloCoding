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

export default function LessonScreen() {
    const {colors}:CustomThemeProp = useTheme();
    const copy = `# Welcome To Hello Coding`
 ;

const {selectedModule} = useSelector((state:RootState)=>state.content);
const {name,description,type,content} = selectedModule;
const navigation = useNavigation();
  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
        <AppHeaders title={name?name:'Some module Title'}/>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          // contentContainerStyle={{flex:1,padding:10}}
          style={{padding:10}}
        >
          <Markdown style={{
            body:{color:colors.text, borderColor:colors.outline, marginTop:0},
            code_block:{backgroundColor:colors.surface},
            blockquote:{backgroundColor:colors.card},
            code_inline:{backgroundColor:colors.surface},
            fence:{backgroundColor:colors.surface},
            table:{borderColor:colors.outline, borderWidth:4},
            tr:{borderColor:colors.outline}
            }}
              
            >
            {content?content:copy}
          </Markdown>
        </ScrollView>
        <View style={{width:"100%",height:70, padding:5, backgroundColor:colors.card,borderTopColor:colors.outline, borderTopWidth:2}}>
            <CustomButton 
              onPress={()=>{
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
              <Text variant='bodyLarge' style={{textAlign:"center"}}>Continue</Text>
            </CustomButton>
        </View>
    </View>
  )
}