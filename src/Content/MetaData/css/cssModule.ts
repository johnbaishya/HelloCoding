// Assuming you have imported the generated content strings and ModuleType
import { Module, ModuleType } from "../../../Types/contentTypes";
import {
  cssLevel1Module1,
  cssLevel1Module2,
  cssLevel1Module3,
  cssLevel2Module1,
  cssLevel2Module2,
  cssLevel2Module3,
  cssLevel3Module1,
  cssLevel3Module2,
  cssLevel3Module3,
  cssLevel4Module1,
  cssLevel4Module2,
  cssLevel4Module3,
  cssLevel5Module1,
  cssLevel5Module2,
  cssLevel5Module3,
  cssLevel6Module1,
  cssLevel6Module2,
  cssLevel6Module3,
  cssLevel7Module1,
  cssLevel7Module2,
  cssLevel7Module3,
  cssLevel8Module1,
  cssLevel8Module2,
  cssLevel8Module3,
  cssLevel8Module4,
} from "../../LearningModules/css/cssModules"; // adjust path as needed


const cssModules: Module[] = [
  // Level 1: Introduction to CSS (levelIndex: 1)
  {
    courseIndex: 2,
    levelIndex: 1,
    index: 0,
    name: "CSS Definition",
    description: "An introduction to CSS and its fundamental concepts.",
    type: ModuleType.lesson,
    content: cssLevel1Module1,
    unlocked:true,
  },
  {
    courseIndex: 2,
    levelIndex: 1,
    index: 1,
    name: "CSS Syntax",
    description: "Learn the structure of CSS rules and syntax.",
    type: ModuleType.lesson,
    content: cssLevel1Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 1,
    index: 2,
    name: "Inline, Internal, and External CSS",
    description: "Understand different methods of applying CSS to HTML.",
    type: ModuleType.lesson,
    content: cssLevel1Module3,
  },

  // Level 2: CSS Selectors and Specificity (levelIndex: 2)
  {
    courseIndex: 2,
    levelIndex: 2,
    index: 0,
    name: "Basic Selectors",
    description: "Learn about element, class, and ID selectors.",
    type: ModuleType.lesson,
    content: cssLevel2Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 2,
    index: 1,
    name: "Combinators and Advanced Selectors",
    description: "Understand descendant, child, and sibling selectors.",
    type: ModuleType.lesson,
    content: cssLevel2Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 2,
    index: 2,
    name: "Specificity and Importance",
    description:
      "Learn how specificity and the !important rule affect CSS rule application.",
    type: ModuleType.lesson,
    content: cssLevel2Module3,
  },

  // Level 3: CSS Box Model (levelIndex: 3)
  {
    courseIndex: 2,
    levelIndex: 3,
    index: 0,
    name: "The Box Model",
    description:
      "Explore the components of the CSS box model: content, padding, border, and margin.",
    type: ModuleType.lesson,
    content: cssLevel3Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 3,
    index: 1,
    name: "Margin and Padding",
    description:
      "Understand how margins and padding create space and affect layout.",
    type: ModuleType.lesson,
    content: cssLevel3Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 3,
    index: 2,
    name: "Borders",
    description: "Learn how to style borders and use border properties effectively.",
    type: ModuleType.lesson,
    content: cssLevel3Module3,
  },

  // Level 4: CSS Layout (levelIndex: 4)
  {
    courseIndex: 2,
    levelIndex: 4,
    index: 0,
    name: "Display Property",
    description:
      "Learn about different display values and how they control element rendering.",
    type: ModuleType.lesson,
    content: cssLevel4Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 4,
    index: 1,
    name: "Flexbox",
    description:
      "Discover the flexbox layout model for creating flexible and responsive designs.",
    type: ModuleType.lesson,
    content: cssLevel4Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 4,
    index: 2,
    name: "CSS Grid",
    description:
      "Master the CSS Grid system for building complex, two-dimensional layouts.",
    type: ModuleType.lesson,
    content: cssLevel4Module3,
  },

  // Level 5: Responsive Design (levelIndex: 5)
  {
    courseIndex: 2,
    levelIndex: 5,
    index: 0,
    name: "Media Queries",
    description:
      "Learn how to use media queries to create designs that adapt to different screen sizes.",
    type: ModuleType.lesson,
    content: cssLevel5Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 5,
    index: 1,
    name: "Responsive Units",
    description:
      "Explore relative units like %, em, rem, vw, and vh for scalable layouts.",
    type: ModuleType.lesson,
    content: cssLevel5Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 5,
    index: 2,
    name: "Mobile-First Design",
    description:
      "Understand the mobile-first approach and how to progressively enhance styles.",
    type: ModuleType.lesson,
    content: cssLevel5Module3,
  },

  // Level 6: Advanced CSS (levelIndex: 6)
  {
    courseIndex: 2,
    levelIndex: 6,
    index: 0,
    name: "CSS Variables",
    description:
      "Learn about CSS custom properties and how they help maintain consistent styles.",
    type: ModuleType.lesson,
    content: cssLevel6Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 6,
    index: 1,
    name: "Transitions and Animations",
    description:
      "Discover how to create smooth transitions and engaging animations.",
    type: ModuleType.lesson,
    content: cssLevel6Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 6,
    index: 2,
    name: "Pseudo-classes and Pseudo-elements",
    description:
      "Understand how pseudo-classes and pseudo-elements enhance CSS styling.",
    type: ModuleType.lesson,
    content: cssLevel6Module3,
  },

  // Level 7: CSS Best Practices (levelIndex: 7)
  {
    courseIndex: 2,
    levelIndex: 7,
    index: 0,
    name: "Writing Maintainable CSS",
    description:
      "Learn best practices for writing clean, organized, and maintainable CSS.",
    type: ModuleType.lesson,
    content: cssLevel7Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 7,
    index: 1,
    name: "CSS Frameworks",
    description:
      "An overview of popular CSS frameworks and how they can speed up development.",
    type: ModuleType.lesson,
    content: cssLevel7Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 7,
    index: 2,
    name: "CSS Preprocessors",
    description:
      "Explore preprocessors like Sass and Less to write more modular and efficient CSS.",
    type: ModuleType.lesson,
    content: cssLevel7Module3,
  },

  // Level 8: Additional CSS Fundamentals (levelIndex: 8)
  {
    courseIndex: 2,
    levelIndex: 8,
    index: 0,
    name: "CSS Inheritance and the Cascade",
    description:
      "Learn how CSS inheritance and the cascade determine which rules are applied.",
    type: ModuleType.lesson,
    content: cssLevel8Module1,
  },
  {
    courseIndex: 2,
    levelIndex: 8,
    index: 1,
    name: "CSS Positioning",
    description:
      "Understand the various CSS positioning methods to control layout.",
    type: ModuleType.lesson,
    content: cssLevel8Module2,
  },
  {
    courseIndex: 2,
    levelIndex: 8,
    index: 2,
    name: "CSS Units and Measurements",
    description:
      "Explore the use of absolute, relative, and viewport units for responsive design.",
    type: ModuleType.lesson,
    content: cssLevel8Module3,
  },
  {
    courseIndex: 2,
    levelIndex: 8,
    index: 3,
    name: "Using Developer Tools for CSS Debugging",
    description:
      "Learn how to leverage browser developer tools to inspect and debug your CSS.",
    type: ModuleType.lesson,
    content: cssLevel8Module4,
  },
];

export default cssModules;
