import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartList: (state, action) => {
      state.cartList = action.payload;
    },
  },
});

export const { updateCartList } = cart.actions;

export default cart.reducer;
