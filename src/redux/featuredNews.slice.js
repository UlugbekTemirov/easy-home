import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  featuredNews: [],
  loading: false,
  error: null,
};

export const fetchFeaturedNews = createAsyncThunk(
  "featuredNews/fetchFeaturedNews",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "api/v1/news/news/featured_posts/",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  }
);

const featuredNewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFeaturedNews.pending]: (state) => {
      state.loading = true;
    },
    [fetchFeaturedNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.featuredNews = action.payload;
    },
    [fetchFeaturedNews.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default featuredNewsSlice.reducer;
