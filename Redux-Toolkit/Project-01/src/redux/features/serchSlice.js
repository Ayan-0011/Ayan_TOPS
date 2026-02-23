import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "serch",
    initialState: {
        quary: '',
        activeTab: 'photo',
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setQuary: (state, action) => {
            state.quary = action.payload;
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setResults: (state, action) => {
            state.results = action.payload;
            state.loading= false
        },
        setLoading: (state, action) => {
            state.loading = true
            state.error=null
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading=false
        },
        clearResult:(state) =>{
            state.results =[]
        }
    },
})


export const { setQuary, setActiveTab, setResults, setLoading, setError, clearResult } = searchSlice.actions;
export default searchSlice.reducer;