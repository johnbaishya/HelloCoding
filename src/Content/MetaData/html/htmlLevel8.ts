import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level8module1, level8module2, level8module3 } from "../../LearningModules/html/htmlmodules";


const htmlLevel8:RawLevel =   {
    index: 8,
    name: "HTML5 New Features",
    description: "In this level, you will explore new features introduced in HTML5 to enhance web development.",
    modules: [
        {
            name: "HTML5 Structural Elements (<main>, <section>, <article>)",
            description: "New structural tags in HTML5 that help define the layout and sections of a webpage.",
            type: ModuleType.lesson,
            content:level8module1,
        },
        {
            name: "HTML5 Form Enhancements (<input type='email'>, <input type='date'>)",
            description: "New form input types and enhancements in HTML5 that improve user experience and data collection.",
            type: ModuleType.lesson,
            content:level8module2,
        },
        {
            name: "New Input Attributes (placeholder, required, pattern)",
            description: "New input attributes in HTML5 that offer better user guidance and input validation.",
            type: ModuleType.lesson,
            content:level8module3,
        },
    ],
};
export default htmlLevel8;