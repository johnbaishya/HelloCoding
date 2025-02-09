import { appStateType, resetAppStore, updateAppStore } from './Slices/appSlice';
import { ContentStateType, resetContentStore, updateContentStore } from './Slices/contentSlice';
import { InputsStateType, resetInputsStore, updateInputsStore } from './Slices/inputsSlice';
import store from './store';

export const setAppState = (data: Partial<appStateType>)=>{
    store.dispatch(updateAppStore(data));
};

export const resetAppState = ()=>{
    store.dispatch(resetAppStore());
};

export const setInputsState = (data:Partial<InputsStateType>)=>{
    store.dispatch(updateInputsStore(data));
};

export const resetInputsState = ()=>{
    store.dispatch(resetInputsStore());
};

export const setContentState = (data:Partial<ContentStateType>)=>{
    store.dispatch(updateContentStore(data));
}

export const resetContentState = ()=>{
    store.dispatch(resetContentStore());
}