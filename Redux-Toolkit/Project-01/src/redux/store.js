import { configureStore } from "@reduxjs/toolkit";
import serchReducer from "./features/serchSlice";


export const store = configureStore({
    reducer:{
       serch:serchReducer,
    }
})