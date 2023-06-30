import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useHttp } from "../hooks/useHttp";

const initialState = {
  featuredProducts: [],
  loading: false,
  error: null,
};

export const fetchFeaturedProducts = createAsyncThunk(
  "featuredProducts/fetchFeaturedProducts",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `api/v1/products/products/featured_products/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const featuredProductsSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFeaturedProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchFeaturedProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.featuredProducts = action.payload;
    },
    [fetchFeaturedProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default featuredProductsSlice.reducer;
