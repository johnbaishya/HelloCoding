import { ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level1module1, level1module2, level1module3, level1module4 } from "../../LearningModules/html/htmlmodules";


const htmlLevel1:RawLevel =  {
    index: 1,
    name: "Introduction to HTML",
    description: "This level introduces HTML, its structure, and its foundational concepts.",
    unlocked:true,
    modules: [
        {
            index:1,
            name: "HTML Definition",
            description: "An overview of what HTML is and its role in web development.",
            type: ModuleType.lesson,
            content:level1module1,
            unlocked:true,
        },
        {
            index:2,
            name: "HTML Structure",
            description: "A deep dive into the basic structure of an HTML document, including essential tags.",
            type: ModuleType.lesson,
            content:level1module2,
        },
        {
            index:3,
            name: "The Document Object Model (DOM)",
            description: "An exploration of the DOM and its significance in interacting with HTML content programmatically.",
            type: ModuleType.lesson,
            content:level1module3,
        },
        {
            index:4,
            name: "HTML File Syntax and Structure",
            description: "A comprehensive understanding of the syntax and conventions for structuring HTML files.",
            type: ModuleType.lesson,
            content:level1module4,
        },
    ],
};

export default htmlLevel1;