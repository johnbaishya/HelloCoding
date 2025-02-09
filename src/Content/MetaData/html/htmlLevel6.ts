import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level6module1, level6module2, level6module3, level6module4, level6module5, level6module6 } from "../../LearningModules/html/htmlmodules";


const htmlLevel6:RawLevel =   {
    index: 6,
    name: "Forms and Input Elements",
    description: "This level covers the creation and management of forms and input elements for data collection and user interaction.",
    modules: [
        {
            name: "Introduction to Forms",
            description: "Understanding the basic structure and purpose of HTML forms in web development.",
            type: ModuleType.lesson,
            content:level6module1,
        },
        {
            name: "Form Attributes (action, method)",
            description: "Exploring the form attributes like action and method to control data submission.",
            type: ModuleType.lesson,
            content:level6module2,
        },
        {
            name: "Text Inputs (<input type='text'>, <input type='password'>)",
            description: "Creating text fields for user input and securing sensitive data with password fields.",
            type: ModuleType.lesson,
            content:level6module3,
        },
        {
            name: "Radio Buttons and Checkboxes",
            description: "How to implement radio buttons and checkboxes for user selection in forms.",
            type: ModuleType.lesson,
            content:level6module4,
        },
        {
            name: "Dropdown Menus (<select>)",
            description: "Using the <select> tag to create dropdown menus that allow users to choose from predefined options.",
            type: ModuleType.lesson,
            content:level6module5,
        },
        {
            name: "Submit Buttons and Actions",
            description: "Creating submit buttons to allow users to submit form data and trigger actions on submission.",
            type: ModuleType.lesson,
            content:level6module6,
        },
    ],
};
export default htmlLevel6;