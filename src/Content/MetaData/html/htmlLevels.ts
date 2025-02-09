import { Level, RawLevel } from "../../../Types/contentTypes";
import rawCourses from "../rawCourses";


const rawlevels = rawCourses.flatMap((item)=>{
    return item.levels;
})

export default rawlevels;
