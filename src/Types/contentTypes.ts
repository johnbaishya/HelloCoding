

export type RawLevel = {
    index:number,
    name:string,
    description:string,
    modules:Module[],
    unlocked?:boolean,
    completed?:boolean,
}

export type RawCourse = {
    index:number,
    name:string,
    label:string,
    image?:string,
    levels:RawLevel[],
    description?:string
}

export type Course = {
    index:number,
    name:string,
    label:string,
    image?:string,
    description?:string,
    completed?:boolean
}


export type Level = {
    courseIndex:number,
    index:number,
    name:string,
    description:string,
    // modules:Module[],
    unlocked?:boolean,
    completed?:boolean,
};





export type Module = CommonModule | QuizModule;

export type CommonModule = {
    courseIndex?:number,
    levelIndex?:number,
    index?:number,
    name:string,
    description:string,
    type:ModuleType,
    content?:string,
    unlocked?:boolean,
    completed?:boolean,
}

export type QuizModule = CommonModule&{
question:string,
options:QuizOption[],
correctAnswer:QuizOption["name"]
}

export type QuizOption = {
name:string,
content:string,
}



export enum ModuleType {
lesson = "lesson", // module where basic understanding of a topic is provided. 
quiz = "quiz", // module where a question is asked and user gets to select the correct answer from the optoins provided
tutorial = "tutorial", // module where user is guided step by step for an specific task
task = "task" // module where user is asked to do an specific task on their own.
}