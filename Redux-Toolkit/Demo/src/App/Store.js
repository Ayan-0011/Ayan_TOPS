import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slices/counterSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice
  },
})