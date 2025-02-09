import { View } from "react-native"
import HomeScreenStyles from "../../Styles/ScrrenStyles/HomeScreenStyles";
import { CustomThemeProp } from "../../Types/themeTypes";
import { Button, Text, useTheme } from "react-native-paper";
import Progress from "../Progress";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import useCourseData from "../../Hooks/useCourseData";

const HomeHeader = ()=>{
    const {colors}:CustomThemeProp = useTheme();
    const navigation = useNavigation();
    const {selectedCourse} = useSelector((state:RootState)=>state.content)
    const {getCourseProgress} = useCourseData();
    return(
    <View style={[HomeScreenStyles.homeheaderContainer,{backgroundColor:colors.card}]}>
        <View style={[HomeScreenStyles.homeheaderButtonsContainer]}>
            <Button 
                icon="chevron-down" 
                mode="contained-tonal" 
                onPress={() => {
                    navigation.navigate("Courses" as never)
                }} 
                contentStyle={{flexDirection:"row-reverse"}}>
                Select Course
            </Button>
        </View>
        <View style={[HomeScreenStyles.courseHeading]}>
            
            <View style={[HomeScreenStyles.courseTitle]}>
                <Text variant="headlineSmall">
                    {selectedCourse?selectedCourse.label:"Welcome"}
                </Text>
            </View>
            <View style={[HomeScreenStyles.courseProgress]}>
            <Progress fill={getCourseProgress(selectedCourse).percentage}/>
            
            </View>
        </View>
    </View>
    )
}

export default HomeHeader;