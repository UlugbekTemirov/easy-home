import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const intialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchHomeProducts = createAsyncThunk(
  "homeProducst/fetchHomeProducts",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/products/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

export const fetchHomeProductsByCategory = createAsyncThunk(
  "homeProducts/fetchHomeProductsByCategory",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/categories/${slug}/products/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const homeProductsSlice = createSlice({
  name: "homeProducts",
  initialState: intialState,
  extraReducers: {
    [fetchHomeProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchHomeProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchHomeProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchHomeProductsByCategory.pending]: (state) => {
      state.loading = true;
    },
    [fetchHomeProductsByCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchHomeProductsByCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default homeProductsSlice.reducer;
