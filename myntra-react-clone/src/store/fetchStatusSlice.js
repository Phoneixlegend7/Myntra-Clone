import { createSlice } from "@reduxjs/toolkit";
const fetchSlice = createSlice({
  name : 'items',
  initialState :{
    fetchDone : false,
    currentlyFetching : false,
  },
  reducers : {
    markFetchDone : (state) => {
         state.fetchDone = true;
    },
    markFetchingStarted : (state) => {
       state.currentlyFetching = true;
    },
    markFetchingEnded : (state) => {
       state.currentlyFetching = false;
    }
  }
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice;