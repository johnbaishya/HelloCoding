import { View, ScrollView } from 'react-native'
import React from 'react'
import AppStyles from '../Styles/appStyles'
import { CustomThemeProp } from '../Types/themeTypes'
import { useTheme } from 'react-native-paper'
import courseStyles from '../Styles/ComponentStyles/courseStyles'
import AppHeaders from '../Components/Header/AppHeaders'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import CourseBox from '../Components/Course/CourseBox'

export default function CourseList() {
    const {colors}:CustomThemeProp = useTheme();
    const {courses} = useSelector((state:RootState)=>state.content);

    return (
        <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
            <AppHeaders title='Courses'/>
            <ScrollView  contentContainerStyle={[courseStyles.courseListContainer,]}>
                {courses.map((item)=>{
                    return(
                        <CourseBox key={item.name} data={item}/>
                    )
                })}
            </ScrollView>
        </View>
    )
    }