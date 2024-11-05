import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
  favoriteList: [],
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCartList: (state, action) => {
      state.cartList = action.payload;
    },
    updateFavoriteList: (state, action) => {
      state.favoriteList = action.payload;
    },
  },
});

export const { updateCartList, updateFavoriteList } = cart.actions;

export default cart.reducer;
