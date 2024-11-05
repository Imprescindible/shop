import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartReducer from '../features/test.js';
import authReducer from '../features/auth/auth.js';
import { authApi } from '../services/auth/authApi.js';
import { productsApi } from '../services/products/productsApi.js';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(authApi.middleware, productsApi.middleware),
});

setupListeners(store.dispatch);
