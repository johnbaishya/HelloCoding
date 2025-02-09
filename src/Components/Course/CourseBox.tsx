import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomThemeProp } from '../../Types/themeTypes'
import { Text, useTheme } from 'react-native-paper'
import courseStyles from '../../Styles/ComponentStyles/courseStyles';
import { IMAGES } from '../../Constants/themeConstants';
import Progress from '../Progress';
import { Course as CourseType } from '../../Types/contentTypes';
import useCourseData from '../../Hooks/useCourseData';
import { setContentState } from '../../Redux/storeActions';
import { useNavigation } from '@react-navigation/native';
import { isSelectedCourse } from '../../Utils/courseUtil';

type CourseProps = {
    selected?:boolean,
    data:CourseType
}

export default function CourseBox({data}:CourseProps) {
    const {colors}:CustomThemeProp = useTheme(); 
    const {getCourseProgress} = useCourseData();
    const navigation = useNavigation();
    const selected = isSelectedCourse(data);
  return (
    <TouchableOpacity 
    style={[courseStyles.courseContainer,{borderColor:colors.primary, borderWidth:selected?3:0}]}
    onPress={()=>{
        setContentState({
            selectedCourse:data,
        });
        navigation.goBack();
    }}
    >
        <View style={[courseStyles.courseContent,{backgroundColor:colors.card}]}>
            <View style={[courseStyles.CourseLogoContainer]}>
                <Image source={{uri:data.image}} style={[courseStyles.courseLogo]}/>
            </View>
            <View style={[courseStyles.CourseTitleContainer]}>
                <Text variant='titleLarge'>
                    {data.label}
                </Text>
            </View>
            <View style={[courseStyles.courseProgressContainer]}>
                <Progress fill={getCourseProgress(data).percentage} />
            </View>
        </View>
    </TouchableOpacity>
  )
}