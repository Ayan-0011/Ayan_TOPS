import { configureStore } from "@reduxjs/toolkit";
import fetchdataSlice from "./Slices/FetchdataSlice";

export const store = configureStore({
  reducer: {
    data: fetchdataSlice,
  },
})