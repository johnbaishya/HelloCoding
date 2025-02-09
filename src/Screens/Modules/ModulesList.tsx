import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppStyles from '../../Styles/appStyles'
import { CustomThemeProp } from '../../Types/themeTypes'
import { useTheme } from 'react-native-paper'
import AppHeaders from '../../Components/Header/AppHeaders'
import ModuleBox from '../../Components/Module/ModuleBox'
import moduleStyles from '../../Styles/ComponentStyles/moduleStyles'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { Level } from '../../Types/contentTypes'
import useCourseData from '../../Hooks/useCourseData'

export default function ModulesList() {
    const {colors}:CustomThemeProp = useTheme();
    const {selectedLevel} = useSelector((state:RootState)=>state.content)
    const currentLevel:Partial<Level> = selectedLevel;  
    const {modules} = useCourseData();
  return (
    <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
    <AppHeaders title={currentLevel?currentLevel.name : 'Module List'}/>
      <ScrollView contentContainerStyle={[moduleStyles.moduleListContainer]}>
        {
          modules.map((item)=>{
            return(
              <ModuleBox data={item} key={item.name}/>
            );
          })
        }
        {/* <ModuleBox/>
        <ModuleBox/>
        <ModuleBox/>
        <ModuleBox/>
        <ModuleBox/> */}
      </ScrollView>
    </View>
  )
}