import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level7module1, level7module2, level7module3 } from "../../LearningModules/html/htmlmodules";


const htmlLevel7:RawLevel =   {
    index: 7,
    name: "Semantic HTML",
    description: "This level emphasizes the importance of semantic HTML in creating accessible, well-structured web content.",
    modules: [
        {
            name: "Importance of Semantic HTML",
            description: "Why using semantic HTML improves accessibility, SEO, and maintainability of a website.",
            type: ModuleType.lesson,
            content:level7module1,
        },
        {
            name: "Semantic Tags (<header>, <footer>, <article>, <section>, <nav>, etc.)",
            description: "The role of semantic HTML tags in defining the structure and meaning of a webpage.",
            type: ModuleType.lesson,
            content:level7module2,
        },
        {
            name: "Creating Accessible Web Content",
            description: "Best practices for making web content accessible to a diverse audience, including people with disabilities.",
            type: ModuleType.lesson,
            content:level7module3,
        },
    ],
};
export default htmlLevel7;