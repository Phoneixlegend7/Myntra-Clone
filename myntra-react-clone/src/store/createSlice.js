import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_ITEMS } from "../data/items";
const itemSlice = createSlice({
  name : 'items',
  initialState : [],
  reducers : {
    addInitialItems : (state,action) =>{
    
      return  action.payload;
    }
  }
});
export const itemActions = itemSlice.actions;
export default itemSlice;