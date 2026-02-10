import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/CounterSlice'

export const store = configureStore({
  reducer: {
    Cart: cartReducer
  },
})
