import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level9module1, level9module2, level9module3, level9module4 } from "../../LearningModules/html/htmlmodules";


const htmlLevel9:RawLevel =   {
    index: 9,
    name: "HTML Best Practices",
    description: "This level focuses on industry best practices for writing clean, efficient, and accessible HTML code.",
    modules: [
        {
            name: "Writing Clean and Well-Structured Code",
            description: "Guidelines for writing maintainable and readable HTML code.",
            type: ModuleType.lesson,
            content:level9module1,
        },
        {
            name: "Accessibility (ARIA)",
            description: "Best practices for making HTML content accessible, including ARIA (Accessible Rich Internet Applications) standards.",
            type: ModuleType.lesson,
            content:level9module2,
        },
        {
            name: "Optimizing HTML for SEO",
            description: "How to optimize HTML content for search engines, ensuring better ranking and visibility.",
            type: ModuleType.lesson,
            content:level9module3,
        },
        {
            name: "Best Practices for Forms and Input Validation",
            description: "Techniques for designing user-friendly forms and ensuring accurate data submission.",
            type: ModuleType.lesson,
            content:level9module4,
        },
    ],
};
export default htmlLevel9;