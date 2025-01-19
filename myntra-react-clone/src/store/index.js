import {configureStore} from  "@reduxjs/toolkit";
import itemSlice from "./createSlice";
import fetchSlice from "./fetchStatusSlice";
import bagSlice from "./Bagslice";

const myntraStore = configureStore({
  reducer : {
    item : itemSlice.reducer,
    status : fetchSlice.reducer,
    bagStatus : bagSlice.reducer
  }
});

export default myntraStore;