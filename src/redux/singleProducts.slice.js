import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  singleProduct: [],
  loading: false,
  error: null,
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/products/${slug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleProduct.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleProduct = action.payload;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default singleProductSlice.reducer;
