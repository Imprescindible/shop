import { createSlice } from '@reduxjs/toolkit';
import { isLogined } from '../../helpers/helpers';

const initialState = {
  isLogined: isLogined(),
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateIsLogin: (state, action) => {
      state.isLogined = action.payload;
    },
  },
});

export const { updateIsLogin } = auth.actions;

export default auth.reducer;
