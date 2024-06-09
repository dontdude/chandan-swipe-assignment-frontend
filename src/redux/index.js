import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice";
import productsSlice from "./productsSlice"; // Import your other reducers

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  products: productsSlice, 
});

export default rootReducer;
