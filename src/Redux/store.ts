import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./Slices/appSlice";
import inputsReducer from "./Slices/inputsSlice";
import contentReducer from "./Slices/contentSlice"


const store = configureStore({
  reducer: {
    app:appReducer,
    inputs:inputsReducer,
    content:contentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store;