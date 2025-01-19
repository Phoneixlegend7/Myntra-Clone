import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bagCount: 0,
  items : [] // Initial count of items in the bag
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItemToBag: (state,actions) => {
      state.bagCount += 1;
      state.items.push(actions.payload);  // Increment the bag count by 1
    },
    resetBag: (state) => {
      if (state.bagCount >= 1) {
        state.bagCount -= 1; // Decrement the bag count by 1
      }
      else {
        state.bagCount = 0; // Ensure the count doesn't go below 0
      } // Reset the bag count to 0 (optional functionality)
    },
    removeBagItems : (state,action) => {
      state.items.filter(item => item.id !== action.payload.id);
    }
  },
});

// Export actions
export const { addItemToBag, resetBag,removeBagItems } = bagSlice.actions;

// Export reducer
export default bagSlice;
