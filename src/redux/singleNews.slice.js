import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  singleNews: [],
  loading: false,
  error: null,
};

export const fetchSingleNews = createAsyncThunk(
  "singleNews/fetchSingleNews",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/news/news/${slug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSingleNews.pending]: (state) => {
      state.loading = true;
    },
    [fetchSingleNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.singleNews = action.payload;
    },
    [fetchSingleNews.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default newsSlice.reducer;
