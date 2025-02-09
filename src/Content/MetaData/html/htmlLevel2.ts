import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level2module1, level2module2, level2module3, level2module4, level2module5, level2module6 } from "../../LearningModules/html/htmlmodules";

const htmlLevel2:RawLevel =   {
    index: 2,
    name: "Basic HTML Tags",
    description: "This level focuses on fundamental HTML tags and their usage for basic web page structure.",
    modules: [
        {
            index:5,
            name: "HTML Headings (<h1> to <h6>)",
            description: "An overview of HTML heading tags and their importance in organizing content hierarchically.",
            type: ModuleType.lesson,
            content:level2module1,
        },
        {
            index:6,
            name: "Paragraphs (<p>)",
            description: "How to structure textual content using paragraph tags to ensure readability and semantic meaning.",
            type: ModuleType.lesson,
            content:level2module2,
        },
        {
            index:7,
            name: "Text Formatting (<strong>, <em>, <u>)",
            description: "Methods of formatting text using bold, italic, and underline for emphasis.",
            type: ModuleType.lesson,
            content:level2module3,
        },
        {
            index:8,
            name: "Line Breaks (<br>)",
            description: "Understanding how line breaks function within text to improve content layout.",
            type: ModuleType.lesson,
            content:level2module4,
        },
        {
            index:9,
            name: "Horizontal Rules (<hr>)",
            description: "Usage of horizontal rules to visually divide sections within a page.",
            type: ModuleType.lesson,
            content:level2module5,
        },
        {
            index:10,
            name: "Comments (<!-- -->)",
            description: "How to add non-visible comments within HTML code for documentation and organization purposes.",
            type: ModuleType.lesson,
            content:level2module6,
        },
        {
            name: "Quiz: Basic HTML Tags - Part 1",
            description: "Assess your knowledge of basic HTML tags for text and structure.",
            type: ModuleType.quiz,
            question: "Which tag is used to create a paragraph in HTML?",
            options: [
              { name: "A", content: "<p>" },
              { name: "B", content: "<div>" },
              { name: "C", content: "<span>" },
              { name: "D", content: "<header>" }
            ],
            correctAnswer: "A"
          },
          {
            name: "Quiz: Basic HTML Tags - Part 2",
            description: "Test your understanding of HTML headings and structure.",
            type: ModuleType.quiz,
            question: "What does the <h1> tag represent in HTML?",
            options: [
              { name: "A", content: "The most important heading" },
              { name: "B", content: "A subheading" },
              { name: "C", content: "A paragraph" },
              { name: "D", content: "A small caption" }
            ],
            correctAnswer: "A",
          },
          {
            courseIndex: 2,
            levelIndex: 2,
            index: 2,
            name: "Quiz: Basic HTML Tags - Part 3",
            description: "Evaluate your understanding of basic HTML formatting and comments.",
            type: ModuleType.quiz,
            question: "How do you write a comment in HTML?",
            options: [
              { name: "A", content: "<!-- comment -->" },
              { name: "B", content: "// comment" },
              { name: "C", content: "/* comment */" },
              { name: "D", content: "<comment>" }
            ],
            correctAnswer: "A",
          },
    ],
};

export default htmlLevel2;