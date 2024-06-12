import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import productsReducer from "./productsSlice"; 
import currencyReducer from './currencySlice';

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productsReducer, 
  currency: currencyReducer,
});

export default rootReducer;
