import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level5module1, level5module2, level5module3, level5module4, level5module5 } from "../../LearningModules/html/htmlmodules";


const htmlLevel5:RawLevel =   {
    index: 5,
    name: "Lists and Tables",
    description: "In this level, you will understand how to structure and present data using lists and tables.",
    modules: [
        {
            index:22,
            name: "Unordered Lists (<ul>)",
            description: "Creating unordered lists for grouping related items and information within a webpage.",
            type: ModuleType.lesson,
            content:level5module1,
        },
        {
            index:23,
            name: "Ordered Lists (<ol>)",
            description: "How to present information in an ordered sequence using the <ol> tag.",
            type: ModuleType.lesson,
            content:level5module2,
        },
        {
            index:24,
            name: "Definition Lists (<dl>)",
            description: "Structuring items and their descriptions using definition lists for semantic clarity.",
            type: ModuleType.lesson,
            content:level5module3,
        },
        {
            index:25,
            name: "Table Structure (<table>, <tr>, <th>, <td>)",
            description: "Understanding how to construct tables and organize data efficiently with the appropriate table tags.",
            type: ModuleType.lesson,
            content:level5module4,
        },
        {
            name: "Nested Lists and Tables",
            description: "Techniques for nesting lists and tables within one another to create complex data structures.",
            type: ModuleType.lesson,
            content:level5module5,
        },
    ],
};
export default htmlLevel5;