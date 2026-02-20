import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const get_data = createAsyncThunk("get_data", async () => {
    const res = await axios.get("http://localhost:5001/Users");
    return res.data
})


export const insert_data = createAsyncThunk("insert_data", async (object) => {
    const response = await axios.post("http://localhost:5001/Users", object);
    return response.data;
})


export const up_data = createAsyncThunk("up_data", async (object) => {
    const response = await axios.post(`http://localhost:5001/Users/${object.id}`, object);
    return response.data;
})

export const delete_data = createAsyncThunk("delete_data", async (id) => {
    const response = await axios.delete(`http://localhost:5001/Users/${id}`);
    return response.data;
})


export const fetchdataSlice = createSlice({
    name: "Fetchdata",
    initialState: {
        users: [],
        name: "ayan"
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(get_data.pending, (state) => {
                state.loading = true;
            })
            .addCase(get_data.fulfilled, (state, action) => {
                state.users = action.payload;   // ✅ Yaha store ho raha hai
            })
            .addCase(get_data.rejected, (state) => {
                state.loading = false;
            })
            .addCase(delete_data.fulfilled, (state, action) => {
                state.users = state.users.filter((item) => item.id !== action.payload.id);
            });
    },
    /// old method
    // extraReducers: {
    //     [get_data.pending]: (state) => {
    //         console.log("pending")
    //     },
    //     [get_data.fulfilled]: (state, action) => {
    //         state.users = action.payload;
    //     }
    // }
})


export default fetchdataSlice.reducer