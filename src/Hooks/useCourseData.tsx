import { useSelector } from "react-redux"
import { RootState } from "../Redux/store"
import { useEffect, useState } from "react";
import { Course, Level, Module } from "../Types/contentTypes";
import { getModuleOfCourse, getModulesOfLevel } from "../Utils/courseUtil";

const useCourseData = ()=>{
    const {modules,selectedCourse,selectedLevel,levels} = useSelector((state:RootState)=>state.content);
    const [stateModules,SetModules] = useState<Module[]>([]);
    const [stateLevels,setLevels] = useState<Level[]>([]);

    useEffect(()=>{
        const newModule = modules.filter((module:Module)=>{
            return module.levelIndex == selectedLevel.index && module.courseIndex == selectedCourse.index;
        });

        SetModules(newModule);

        const newLevels = levels.filter((level:Level)=>{
            return level.courseIndex == selectedCourse.index;
        });
        setLevels(newLevels);

        
    },[selectedLevel, selectedCourse,modules,levels]);

    const getLevelProgress = (level:Level)=>{
        const modules = getModulesOfLevel(level);
        const totalModules = modules.length;
        const completeModules = modules.filter((item)=>{
            return item.completed === true
        }).length;
        const levelPercentage = ((completeModules/totalModules)*100).toFixed(0);
        return {
            percentage:parseInt(levelPercentage),
            total:totalModules,
            completed:completeModules,
        };
    }

    const getCourseProgress = (course:Course)=>{
        const modules = getModuleOfCourse(course);
        const totalModules = modules.length;
        const completeModules = modules.filter((item)=>{
            return item.completed === true
        }).length;
        const coursePercentage = ((completeModules/totalModules)*100).toFixed(0);
        return {
            percentage:parseInt(coursePercentage),
            total:totalModules,
            completed:completeModules,
        };
    }

    

    // const getModules = ()=>{
       
    // }

    return{
        modules:stateModules,
        levels:stateLevels,
        getLevelProgress,
        getCourseProgress
    }
}

export default useCourseData;