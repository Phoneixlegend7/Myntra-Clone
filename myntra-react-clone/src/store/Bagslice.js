import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bagCount: 0,
  items : []// Initial count of items in the bag
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addItemToBag: (state,actions) => {
      state.bagCount += 1;
      const existingItem = state.items.find(item => item.id === actions.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          id: actions.payload, // Use userId as the unique identifier
          quantity: 1, // Start with 1 for the first addition
        };
        state.items.push(newItem);
      }
        // Increment the bag count by 1
    },
    resetBag: (state,actions) => {
      if (state.bagCount >= 1) {
        state.bagCount -= 1; // Decrement the bag count by 1
      }
      else {
        state.bagCount = 0; // Ensure the count doesn't go below 0
      } // Reset the bag count to 0 (optional functionality)
      state.items.pop();
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
