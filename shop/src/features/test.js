import { createSlice } from '@reduxjs/toolkit';
import { isLogined } from '../helpers/helpers';

const initialState = {
  cartList: [],
  favoriteList: [],
  isLogined: isLogined(),
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
    updateIsLogin: (state, action) => {
      state.isLogined = action.payload;
    },
  },
});

export const { updateCartList, updateFavoriteList, updateIsLogin } =
  cart.actions;

export default cart.reducer;
