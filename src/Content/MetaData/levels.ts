import { Level, RawCourse, RawLevel } from "../../Types/contentTypes";
import cssLevels from "./css/cssLevels";
import rawCourses from "./rawCourses";


const levels:Level[] = rawCourses.flatMap((item:RawCourse):Level[]=>
    item.levels.map((level:RawLevel)=>({
        courseIndex:item.index,
        index:level.index,
        name:level.name,
        description:level.description,
        completed:level.completed,
        unlocked:level.unlocked,
    }))
)

const allLevel:Level[] = [...levels,...cssLevels];

export default allLevel;
