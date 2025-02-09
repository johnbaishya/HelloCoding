import { Module, RawCourse, RawLevel } from "../../Types/contentTypes";
import cssModules from "./css/cssModule";
import rawCourses from "./rawCourses";


const modules:Module[] = rawCourses.flatMap((course:RawCourse):Module[]=>
    course.levels.flatMap((level:RawLevel)=>(
        level.modules.map((module:Module)=>({
            ...module,
            courseIndex:course.index,
            levelIndex:level.index,
        }))
    ))
)

const allModules:Module[] = [...modules,...cssModules]

export default allModules;