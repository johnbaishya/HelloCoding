import { Course } from "../../Types/contentTypes";
import cssCourse from "./css/cssCourse";
import rawCourses from "./rawCourses";

const courses:Course[] = rawCourses.map((item)=>{
    return{
        index:item.index,
        label:item.label,
        name:item.name,
        description:item.description,
        image:item.image,
    };
});


export default [...courses,cssCourse];