import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"no",
    initialState:{
        no:0,
        name:"Ayan"
    },   
    reducers:{
        increment:(state)=>{
            
            state.no += 1
        },
        decrement:(state)=>{
            if(state.no > 0){

                state.no -= 1
            }
        },
        change:(sate)=>{
            sate.name="Ansari"
        },
        byAmount:(state, actions)=>{
            state.no += actions.payload
        } 
    }   
})

export const {increment, decrement, change, byAmount} = counterSlice.actions;
export default counterSlice.reducer