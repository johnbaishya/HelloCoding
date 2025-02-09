import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level3module1, level3module2, level3module3, level3module4, level3module5, level3module6 } from "../../LearningModules/html/htmlmodules";

const htmlLevel3:RawLevel =   {
    index: 3,
    name: "HTML Attributes",
    description: "In this level, you will delve into various HTML attributes, which provide additional functionality to elements.",
    modules: [
        {
            index:11,
            name: "Introduction to Attributes",
            description: "An overview of HTML attributes and their role in enhancing element functionality.",
            type: ModuleType.lesson,
            content:level3module1,
        },
        {
            index:12,
            name: "Global Attributes (id, class, style, etc.)",
            description: "Exploring the global attributes that can be applied across most HTML elements to modify their behavior.",
            type: ModuleType.lesson,
            content:level3module2,
        },
        {
            index:13,
            name: "Links and the href Attribute",
            description: "Understanding how the href attribute links to external resources or internal sections within a webpage.",
            type: ModuleType.lesson,
            content:level3module3,
        },
        {
            index:14,
            name: "Image Attributes (src, alt)",
            description: "The role of attributes like src and alt in embedding and describing images on a webpage.",
            type: ModuleType.lesson,
            content:level3module4,
        },
        {
            index:15,
            name: "The title Attribute",
            description: "How the title attribute provides supplementary information about an element when hovered over.",
            type: ModuleType.lesson,
            content:level3module5,
        },
        {
            index:16,
            name: "Forms and Form Elements (<input>, <button>, <select>)",
            description: "Introduction to forms and input elements used for gathering user data and interaction on websites.",
            type: ModuleType.lesson,
            content:level3module6,
        },
    ],
};
export default htmlLevel3;