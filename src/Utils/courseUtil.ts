import { setContentState } from "../Redux/storeActions";
import { Course, Level, Module } from "../Types/contentTypes";
import { LocalStorageKey } from "../Types/localStorage";
import { storeLocalData, storeMultipleLocalData } from "./localStorage";
import store, { RootState } from "../Redux/store";
import { useSelector } from "react-redux";


export const getItemIndexfromList  = (list:Course[]|Level[]|Module[],item:Course|Level|Module):number=>{
    const index = list.findIndex((eachItem)=>{
        return item.name == eachItem.name;
    });
    return index;
}

export const isLastItem = (list:Course[]|Level[]|Module[],item:Course|Level|Module):boolean=>{
    const listLength  = list.length;
    const itemIndex = getItemIndexfromList(list,item);

    return itemIndex >= listLength-1;
}


// to get the level detail of a certain module
export const getLevelFromModule = (module:Module):Level|undefined=>{
    const {levels} = store.getState().content;
    const level:Level|undefined = levels.find((item)=>{
        return module.levelIndex==item.index && module.courseIndex == item.courseIndex;
    }) 
    return level;
}



export const getCourseFromModule= (module:Module):Course|undefined=>{
    const {courses} = store.getState().content;
    const course:Course|undefined  = courses.find((item:Course)=>{
        return module.courseIndex == item.index;
    });

    return course;
}



export const updateNewAvailableModule = (module:Module)=>{
    storeLocalData(LocalStorageKey.recentAvailableModule,module).then(()=>{
        setContentState({
            recentAvailableModule:module,
        });
    });
};



export const getModulesOfSameLevel = (module:Module):Module[]=>{
    const {modules} = store.getState().content;
    const newModules:Module[] = modules.filter((item:Module)=>{
        return item.levelIndex == module.levelIndex && item.courseIndex == module.courseIndex;
    });
    return newModules;
};

export const getModulesOfLevel = (level:Level):Module[]=>{
    const {modules} = store.getState().content;
    const newModules:Module[] = modules.filter((item:Module)=>{
        return item.levelIndex == level.index && item.courseIndex == level.courseIndex;
    });
    return newModules;
}


export const getModuleOfCourse = (course:Course):Module[]=>{
    const {modules} = store.getState().content;
    const newModules:Module[] = modules.filter((item:Module)=>{
        return item.courseIndex == course.index;
    });
    return newModules;
}


export const isLastModuleInLevel = (module:Module):boolean=>{
    const levelmodules:Module[] = getModulesOfSameLevel(module);
    const lastModule:boolean = isLastItem(levelmodules,module);
    return lastModule;
};

export const isLastModuleInCourse = (module:Module):boolean=>{
    const {modules} = store.getState().content;
    const lastModule:boolean = isLastItem(modules,module);
    return lastModule;
}


export const getLevelsofSameCourse = (level:Level):Level[]=>{
    const {levels} = store.getState().content;
    const newLevels:Level[] = levels.filter((item:Level)=>{
        return item.courseIndex == level.courseIndex;
    });
    return newLevels;
};



export const isLastLevelInCourse = (level:Level):boolean=>{
    const courseLevels:Level[] = getLevelsofSameCourse(level);
    const lastLevel:boolean = isLastItem(courseLevels,level);
    return lastLevel; 
}


export const isSelectedCourse = (course:Course):boolean=>{
    const {selectedCourse} = store.getState().content;
    return course.name == selectedCourse.name;
}

export const isSelectedlevel = (level:Level):boolean=>{
    const {selectedLevel} =store.getState().content;
    return level.name == selectedLevel.name;
}


export const isSelectedModule = (module:Module):boolean=>{
    const {selectedModule} = store.getState().content;
    return module.name == selectedModule.name;
}








// export const isNotLasitem = (module:Module)=>{
//     const {courses,selectedCourse,selectedLevel,modules} = store.getState().content;
//     const courseIndex = courses.findIndex((course)=>{
//         return course.name === selectedCourse.name; 
//     });

//     const course = courses[courseIndex];
//     const levelIndex = course.levels.findIndex((level)=>{
//         return level.name === selectedLevel.name;
//     });
//     const level = course.levels[levelIndex];

//     const moduleIndex  = level.modules.findIndex((md)=>{
//         return md.name === module.name;
//     });

    
//     let modulesLength = courses[courseIndex].levels[levelIndex].modules.length;
//     let levelLength = courses[courseIndex].levels.length;
//     return {
//         module:modulesLength > moduleIndex + 1,
//         level:levelLength > levelIndex + 1,
//     };
// };


export const getNextModule = ():Module=>{
    const {modules,selectedModule} = store.getState().content;
    const sModuleIndex = getItemIndexfromList(modules,selectedModule);
    const lastModuleinCourse = isLastModuleInCourse(selectedModule);
    if(lastModuleinCourse){
        return selectedModule;
    }
    return modules[sModuleIndex + 1];
}


// export const getNextModule = ()=>{
//     const {courses,selectedCourse,selectedModule,selectedLevel} = store.getState().content;

//     const courseIndex = courses.findIndex((course)=>{
//         return course.name === selectedCourse.name; 
//     });

//     const course = courses[courseIndex];
//     const levelIndex = course.levels.findIndex((level)=>{
//         return level.name === selectedLevel.name;
//     });
//     const level = course.levels[levelIndex];
//     const nextLevel = course.levels[levelIndex+1];

//     const moduleIndex  = level.modules.findIndex((module)=>{
//         return module.name === selectedModule.name;
//     });
//     let nextModule:Module;
//     if(isNotLasitem(selectedModule).module){
//         nextModule = level.modules[moduleIndex+1];
//     }else{
//         if(isNotLasitem(selectedModule).level){
//             nextModule = nextLevel.modules[0];
//         }else{
//             nextModule = level.modules[moduleIndex];
//         }
//     }
//     return nextModule;
// };


export const unlockNextModule = async()=>{
    const {levels,modules,courses,selectedModule} = store.getState().content;
    const selectedModuleIndex:number = getItemIndexfromList(modules,selectedModule);
    const currentLevel:Level|undefined = getLevelFromModule(selectedModule);
    // const courseLevels:Level[] = getLevelsofSameCourse(currentLevel as Level)
    const currentLevelIndex = getItemIndexfromList(levels,currentLevel as Level)
    const currentCourse:Course|undefined = getCourseFromModule(selectedModule);
    const currentCourseIndex = getItemIndexfromList(courses,currentCourse as Course);
    const currentModule = {...selectedModule};
    const nextModule = {...modules[selectedModuleIndex+1]};
    
    const newModules = [...modules];
    const newCourses = [...courses];
    const newLevels = [...levels];


    // make current module completed
    let newCurrentModule:Module = {
        ...currentModule,
        completed:true,
        unlocked:true,
    };

    let newNextModule:Module = {
        ...nextModule,
        unlocked:true,
    };

    let newCurrentLevel:Level = {
        ...currentLevel as Level,
        completed:true,
    };

    let newNextLevel:Level = {
        ...levels[currentLevelIndex + 1],
        unlocked:true,
    };

    let newCurrentCourse:Course = {
        ...currentCourse as Course,
        completed:true,
    };

    // trying to make level competed,
    // trying to maKe course completed,

    // make the current module completed
    newModules[selectedModuleIndex] = newCurrentModule;
    // newModules[selectedModuleIndex].completed = true;
    if(isLastModuleInCourse(selectedModule)){
        newCourses[currentCourseIndex] = newCurrentCourse;
        newLevels[currentLevelIndex] = newCurrentLevel;
        return;
    }

    // make next model unlocked;
    newModules[selectedModuleIndex + 1] = newNextModule;
    if(isLastModuleInLevel(selectedModule)){
        // make the current level completed;
        // newLevels[currentLevelIndex] = newCurrentLevel;
        // make the next level unlocked;
        newLevels[currentLevelIndex + 1] = newNextLevel;
    }



    await storeMultipleLocalData([
        [LocalStorageKey.modules,newModules],
        [LocalStorageKey.levels,newLevels],
        [LocalStorageKey.courses,newCourses],     
    ]);

    setContentState({
        modules:newModules,
        levels:newLevels,
        courses:newCourses,
    });
};


// export const unlockNextModule = ()=>{
//     const {courses,selectedCourse,selectedModule,selectedLevel} = store.getState().content;

//     const courseIndex = courses.findIndex((course)=>{
//         return course.name == selectedCourse.name; 
//     });

//     const course = courses[courseIndex];
//     const levelIndex = course.levels.findIndex((level)=>{
//         return level.name === selectedLevel.name;
//     });
//     const level = course.levels[levelIndex];

//     const moduleIndex  = level.modules.findIndex((module)=>{
//         return module.name === selectedModule.name;
//     });

//     // const module = level.modules[moduleIndex];

//     let updatedCourses  = [...courses];
//     // let modulesLength = updatedCourses[courseIndex].levels[levelIndex].modules.length;
//     // let levelLength = updatedCourses[courseIndex].levels.length;
//     if(isNotLasitem(selectedModule).module){
//         // 0-1
//         // 1-2
//         // 2-3
//         // 3-4
//         updatedCourses[courseIndex].levels[levelIndex].modules[moduleIndex + 1].unlocked = true;
//         updatedCourses[courseIndex].levels[levelIndex].modules[moduleIndex].completed = true;
//     }else{
//         if(isNotLasitem(selectedModule).level){
//             updatedCourses[courseIndex].levels[levelIndex + 1].modules[0].unlocked = true;
//         }
//     }
//     console.log(updatedCourses);
//     storeLocalData(LocalStorageKey.courses,updatedCourses);
//     setContentState({courses:updatedCourses});
// };


// export const isLevelUnlocked = (level: Level): boolean => {
//     const course:Course = htmlCourse;
//     const {recentAvailableModule} = store.getState().content;

//     if(level.index === 1){
//         return true;
//     }

//     if (!recentAvailableModule){
//         return false;
//     }; // Lock all if there's no progress

//     // Find the level containing the recent available module
//     const unlockedLevel:Level = course.levels.find((lvl) =>
//         lvl.modules.some((mod) => mod.name === recentAvailableModule.name)
//     ) as Level;

//     if (!unlockedLevel){
//         return false;
//     }; // Lock all if the level is not found

//     return level.index <= unlockedLevel.index;
// };


// export const isModuleUnlocked = (module: Module): boolean => {
//     const course:Course = htmlCourse;
//     const {recentAvailableModule} = store.getState().content;

//     if (!recentAvailableModule) {
//         return false;
//     }; // No progress, so all modules are locked

//     // Find the level containing the given module
//     const moduleLevel = course.levels.find((lvl) =>
//         lvl.modules.some((mod) => mod.name === module.name)
//     );

//     // Find the level containing the recently unlocked module
//     const unlockedLevel = course.levels.find((lvl) =>
//         lvl.modules.some((mod) => mod.name === recentAvailableModule.name)
//     );

//     if (!unlockedLevel || !moduleLevel) return false; // If no matching level is found, lock all

//     // Allow access to modules in unlocked levels and the first module of the next level
//     if (level.index < unlockedLevel.index + 1) return true;

//     if (level.index === unlockedLevel.index + 1) {
//         return level.modules.indexOf(module) === 0; // Only unlock the first module of the next level
//     }

//     return false; // Lock anything beyond
// };

