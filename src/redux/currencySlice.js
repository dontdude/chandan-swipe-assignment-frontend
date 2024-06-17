import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrencyChange } from '../utils/currencyService';

export const fetchRates = createAsyncThunk('currency/fetchRates', fetchCurrencyChange);

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    rates: {},
    currentCurrency: '$',
  },
  reducers: {
    setCurrency(state, action) {
      state.currentCurrency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRates.fulfilled, (state, action) => {
      state.rates = action.payload;
    });
  },
});

export const { setCurrency } = currencySlice.actions;
export const selectRates = (state) => state.currency.rates;

export default currencySlice.reducer;
