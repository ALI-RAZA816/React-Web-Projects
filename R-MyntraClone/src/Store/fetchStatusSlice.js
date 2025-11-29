import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name: 'fetchStatus',
    initialState :{
        fetchDone : false,
        currentFetch : false
    },
    reducers:{
        markfetchDone : (state) =>{
            state.fetchDone = true;
        },
        markfetchingStart : (state) => {
            state.currentFetch = true;
        },
        markfetchingEnd : (state) =>{
            state.currentFetch = false;
        }
    }
});


export default fetchSlice;
export const fetchSliceActions = fetchSlice.actions;