import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  productsCategories: [],
  loading: false,
  error: null,
};

export const fetchProductsCategories = createAsyncThunk(
  "productsCategories/fetchProductsCategories",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/categories`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const productsCategoriesSlice = createSlice({
  name: "productsCategories",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProductsCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsCategories = action.payload;
    },
    [fetchProductsCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default productsCategoriesSlice.reducer;
