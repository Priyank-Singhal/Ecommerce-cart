import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import toastReducer from './toastSlice';
import currencySlice from './currencySlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencySlice,
    toast: toastReducer,
  },
});

export default store;
