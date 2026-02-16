import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


const fetchdata = asyncThunkCreator = ()=>{
    const res = axios.get("http://localhost:5001/Users");
    console.log(res.data);
    
}
export const data = createSlice({
    name:"Fetch data",
    initialState:{
        
    },
    reducers:{
        
    }
})