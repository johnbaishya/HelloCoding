import { IMAGES } from "../../Constants/themeConstants";
import {RawCourse } from "../../Types/contentTypes";
import htmlLevel1 from "./html/htmlLevel1";
import htmlLevel2 from "./html/htmlLevel2";
import htmlLevel3 from "./html/htmlLevel3";
import htmlLevel4 from "./html/htmlLevel4";
import htmlLevel5 from "./html/htmlLevel5";
import htmlLevel6 from "./html/htmlLevel6";
import htmlLevel7 from "./html/htmlLevel7";
import htmlLevel8 from "./html/htmlLevel8";
import htmlLevel9 from "./html/htmlLevel9";

// const courses:Course[] = [
//     {
//         name:"html",
//         label:"HTML",
//         levels:[],
//     }
// ]



const htmlCourse:RawCourse = {
    index:1,
    name: "html",
    label: "HTML",
    image:"https://img.icons8.com/color/48/000000/html-5.png",
    levels: [
        htmlLevel1,
        htmlLevel2,
        htmlLevel3,
        htmlLevel4,
        htmlLevel5,
        htmlLevel6,
        htmlLevel7,
        htmlLevel8,
        htmlLevel9,
    ],
};

const anotherCourse:RawCourse = {
    index:2,
    name: "js",
    label: "JS",
    
    levels: [
        htmlLevel1,
        htmlLevel2,
        htmlLevel3,
        htmlLevel4,
        htmlLevel5,
        htmlLevel6,
        htmlLevel7,
        htmlLevel8,
        htmlLevel9,
    ],
};


// export type RawCourse = typeof htmlCourse;
const rawCourses:RawCourse[] = [htmlCourse] as RawCourse[];

export default rawCourses;