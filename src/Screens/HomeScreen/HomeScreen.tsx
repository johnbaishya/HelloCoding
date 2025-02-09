import { View,Text } from "react-native";
import AppStyles from "../../Styles/appStyles";
import { Button, useTheme } from "react-native-paper";
import { unauthenticateApp } from "../../Services/AuthServices";
import Clock from "../../Components/Clock";
import PunchButton from "../../Components/PunchButton";
import LevelContainer from "../../Components/HomeScreenComponents/LevelsContainer";
import HomeHeader from "../../Components/HomeScreenComponents/HomeHeader";
import levels from "../../Content/MetaData/levels";
import modules from "../../Content/MetaData/modules";
import courses from "../../Content/MetaData/courses";


const HomeScreen = ()=>{
    const {colors} = useTheme();
    return(
        <View style={[AppStyles.container,{backgroundColor:colors.background}]}>
            {/* <Clock/>
            <PunchButton/>
            <Button onPress={unauthenticateApp}>
                <Text>logout</Text>
            </Button> */}
            <View style={{height:"25%"}}>
                <HomeHeader/>
            </View>
            <View style={{height:"75%"}}>
                <LevelContainer/>
            </View>
        </View>
    )
}

export default HomeScreen;
