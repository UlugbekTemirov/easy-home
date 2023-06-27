import { createSlice } from "@reduxjs/toolkit";
import homeProducts from "../db/homeProducts.db";

const intialState = {
  products: [...homeProducts],
  loading: false,
  error: null,
};

const homeProductsSlice = createSlice({
  name: "homeProducts",
  initialState: intialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
  },
});

export const { fetchProductsStart } = homeProductsSlice.actions;
export default homeProductsSlice.reducer;
