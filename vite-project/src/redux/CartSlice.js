import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // cart starts empty
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);  // ✅ add item to cart
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
