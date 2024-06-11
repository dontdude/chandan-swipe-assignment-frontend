import { createSlice } from "@reduxjs/toolkit";
import generateRandomId from "../utils/generateRandomId";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
        id: generateRandomId(),
        name: `Test Product`,
        description: `Test Product Description`,
        rate: 1.00,
    }  
  ],
  reducers: {
    addProduct: (state, action) => {
      if(action.payload.id === 0) {
        state.push({ ...action.payload, id: generateRandomId() });
      } else {
        state.push(action.payload);
      }
    },
    // deleteProduct: (state, action) => {
    //   return state.filter((product) => product.id !== action.payload);
    // },
    updateProduct: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProduct, updateProduct } = productsSlice.actions;
export const selectProductList = (state) => state.products;
export default productsSlice.reducer;
