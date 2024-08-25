import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCurrency: 'INR',
  conversionRates: {
    USD: {symbol: '$', value:1},
    EUR: {symbol: '€', value:0.89},
    INR: {symbol: '₹', value:83},
  },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export const selectConversionRate = (state) => state.currency.conversionRates[state.currency.selectedCurrency];

export default currencySlice.reducer;
