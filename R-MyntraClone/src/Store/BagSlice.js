import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'BagItems',
    initialState : [],
    reducers: {
        addtoBag : (state, action) =>{
            state.push(action.payload)
        },
        removefromBag : (state, action) =>{
            return state.filter(itemId => itemId !== action.payload);
        }
    }
});


export default bagSlice;
export const bagActions = bagSlice.actions;