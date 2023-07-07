import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  singleService: {},
  loading: true,
  error: null,
};

export const fetchSingleService = createAsyncThunk(
  "singleService/fetchSingleService",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/service/${slug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const singleServiceSlice = createSlice({
  name: "singleService",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleService.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleService.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleService = action.payload;
    },
    [fetchSingleService.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default singleServiceSlice.reducer;
