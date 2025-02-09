import { Level, ModuleType, RawLevel } from "../../../Types/contentTypes";
import { level4module1, level4module2, level4module3, level4module4, level4module5 } from "../../LearningModules/html/htmlmodules";

const htmlLevel4:RawLevel =   {
    index: 4,
    name: "Links and Media",
    description: "This level explores how to work with links and media, crucial elements for interactive and engaging web content.",
    modules: [
        {
            index:17,
            name: "Working with Links (<a>)",
            description: "How to create hyperlinks for navigation and linking resources in web pages using the <a> tag.",
            type: ModuleType.lesson,
            content:level4module1,
        },
        {
            index:18,
            name: "Opening Links in New Tabs",
            description: "Techniques to open links in new tabs or windows to enhance user experience and content interaction.",
            type: ModuleType.lesson,
            content:level4module2,
        },
        {
            index:19,
            name: "Embedding Images (<img>)",
            description: "Methods of embedding images into a webpage with proper attributes for optimization and accessibility.",
            type: ModuleType.lesson,
            content:level4module3,
        },
        {
            index:20,
            name: "Audio and Video Tags (<audio>, <video>)",
            description: "Embedding and controlling multimedia elements like audio and video within an HTML document.",
            type: ModuleType.lesson,
            content:level4module4,
        },
        {
            index:21,
            name: "Embedding Content from Other Sites (<iframe>)",
            description: "How to use iframes to embed third-party content, such as videos, maps, or interactive widgets, into a webpage.",
            type: ModuleType.lesson,
            content:level4module5,
        },
    ],
};
export default htmlLevel4;