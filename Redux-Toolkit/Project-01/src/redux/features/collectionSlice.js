import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const initialState = {

    items: JSON.parse(localStorage.getItem('collection')) || []
}

const CollectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {

            const Exitsitems = state.items.find((item) => item.id === action.payload.id)

            if (!Exitsitems) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
                toast.success("add to Collection")
            }
            else {
                toast.error("already added to colletion")
            }
        },
        removeCollection: (state, action) => {

            state.items = state.items.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection: (state) => {

            state.items = []
            localStorage.removeItem('collection')
        }

    }

})

export const { addCollection, removeCollection, clearCollection } = CollectionSlice.actions;

export default CollectionSlice.reducer