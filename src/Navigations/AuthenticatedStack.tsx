import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import CourseList from "../Screens/CourseList";
import ModulesList from "../Screens/Modules/ModulesList";
import LessonScreen from "../Screens/LearningScreens/LessonScreen";
import CodeLabScreen from "../Screens/CodeLabScreen/CodeLabScreen";
import QuizScreen from "../Screens/LearningScreens/QuizScreen";

const Stack = createNativeStackNavigator();

const AuthenticatedStack = ()=>{
    return(
        <>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="BottomNavigation" component={BottomNavigation}/>
                <Stack.Screen name="Courses" component={CourseList}/>
                <Stack.Screen name="ModuleList" component={ModulesList}/>
                <Stack.Screen name="LessonScreen" component={LessonScreen}/>
                <Stack.Screen name="QuizScreen" component={QuizScreen}/>
                {/* <Stack.Screen name="CodeLabScreen" component={CodeLabScreen}/> */}
                
            </Stack.Navigator>
        </>
    )
}

export default AuthenticatedStack;