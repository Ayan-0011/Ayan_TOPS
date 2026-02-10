import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "counter",
    initialState: {
        number: 0,
        name: "ayan"
    },
    reducers: {
        increament: (state) => {
            state.number += 1
        },
        decreament: (state) => {
            state.number -= 1
        },
        change: (state) => {
            state.name = "Ansari"
        },
    }
})

export const { increament, decreament, change } = cartSlice.actions
export default cartSlice.reducer
