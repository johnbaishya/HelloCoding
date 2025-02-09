import { createSlice } from "@reduxjs/toolkit";
import { Course, Level, Module } from "../../Types/contentTypes";
import courses from "../../Content/MetaData/courses";


const initialState = {
   html:"",
   css:"",
   js:"",
   CodeLabScreenIndex:0,
   selectedLevel:{} as Level,
   selectedModule:{} as Module,
   selectedCourse:courses[0] as Course,
   recentAvailableModule:{} as Module,
   courses:[] as Course[],
   levels:[] as Level[],
   modules:[] as Module[],
};

export type ContentStateType = typeof initialState

export const contentSlice = createSlice({
    name:"content",
    initialState:initialState,
    reducers:{
        updateContentStore:(state,action)=>{
            let payload: Partial<ContentStateType> = action.payload;
            // let keys = Object.keys(payload);

            // for (let x of keys){
            //     state[x as keyof ContentStateType]  = payload[x as keyof ContentStateType];
            // }

            Object.assign(state, payload); // ✅ Cleanest way
            // return {
            //     ...state,
            //     ...payload
            // };
        },
        resetContentStore:()=>{
            return initialState;
        }
    }
}) 

export const {updateContentStore,resetContentStore} = contentSlice.actions;
export default contentSlice.reducer;