import { configureStore } from "@reduxjs/toolkit";
import serchReducer from "./features/serchSlice";
import collectionReducer from './features/collectionSlice'


export const store = configureStore({
    reducer:{
       serch:serchReducer,
       collection:collectionReducer
    }
})