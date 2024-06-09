import { createSlice } from "@reduxjs/toolkit";
import generateRandomId from "../utils/generateRandomId";

const formatInvoice = (invoice) => {
  const formattedItems = invoice.items
    .filter(({ id }) => id !== 0)
    .map(({ id, quantity }) => ({ id, quantity }));

  return {
    ...invoice,
    items: formattedItems,
  };
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState: [],
  reducers: {
    addInvoice: (state, action) => {
      state.push({ ...formatInvoice(action.payload), id: generateRandomId() });
    },
    deleteInvoice: (state, action) => {
      return state.filter((invoice) => invoice.id !== action.payload);
    },
    updateInvoice: (state, action) => {
      const { id, updatedInvoice } = action.payload;
      const index = state.findIndex((invoice) => invoice.id === id);
      if (index !== -1) {
        state[index] = { ...formatInvoice(updatedInvoice), id };
      }
    },
  },
});

export const { addInvoice, deleteInvoice, updateInvoice } = invoicesSlice.actions;

export const selectInvoiceList = (state) => state.invoices;

export default invoicesSlice.reducer;
