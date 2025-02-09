import { LocalStorageKey } from '../Types/localStorage';
import { User } from '../Types/models';
import { getLocalData, storeLocalData } from '../Utils/localStorage';
import { setAppState, setContentState } from '../Redux/storeActions';
import { checkAppAuthenticationStatus, unauthenticateApp } from '../Services/AuthServices';
import { Appearance } from 'react-native';
import courses from '../Content/MetaData/courses';
import { Course, Level, Module } from '../Types/contentTypes';
import levels from '../Content/MetaData/levels';
import modules from '../Content/MetaData/modules';





// this method checks the if auth crendentials and token are stored in the localstorage. if yes then authenticate the app, otherwise unauthenticate the app. this function is trigerred initially while opening the app.
const initializeAuth = async()=>{
    setAppState({appLoading:true});
    let appAuth = await checkAppAuthenticationStatus();
    if(appAuth){
        let user = await getLocalData(LocalStorageKey.user) as User;
        setAppState({user,authenticated:true,appLoading:false});
    }else{
        await unauthenticateApp();
    }
};



const darkModeChangedListener = ()=>{
    Appearance.addChangeListener((data)=>{
        let colorScheme = data.colorScheme;
        let darkMode = colorScheme === "dark" ? true : false;

        setAppState({darkTheme:darkMode});
    });
};


const DecideDarkMode = ()=>{
    const colorScheme  = Appearance.getColorScheme();
    let darkMode = false;
    if(colorScheme === "dark"){
        darkMode = true;
    }
    setAppState({
        darkTheme:darkMode,
    });
};




export const resetContent = async()=>{
    await storeLocalData(LocalStorageKey.courses,courses);
    await storeLocalData(LocalStorageKey.levels,levels);
    await storeLocalData(LocalStorageKey.modules,modules);

    setContentState({
        courses,
        levels,
        modules,
    });
};


const setContent = async()=>{
    const ldcourses = await getLocalData(LocalStorageKey.courses) as Course[];
    const ldlevels = await getLocalData(LocalStorageKey.levels) as Level[];
    const ldModules = await getLocalData(LocalStorageKey.modules) as Module[];
    if(!ldcourses){
        await storeLocalData(LocalStorageKey.courses,courses);
        setContentState({courses:courses})
    }else{
        setContentState({
            courses:ldcourses,
        });
    }

    if(!ldlevels){
        await storeLocalData(LocalStorageKey.levels,levels);
        setContentState({levels:levels});
    }else{
        setContentState({
            levels:ldlevels,
        });
    }

    if(!ldModules){
        await storeLocalData(LocalStorageKey.modules,modules);
        setContentState({modules:modules});
    }else{
        setContentState({
            modules:ldModules,
        });
    }
}


const appConfig = ()=>{
    setContent();
    initializeAuth();
    DecideDarkMode();
    darkModeChangedListener();
};

export default appConfig;
