import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const { request } = useHttp();
  const response = await request({
    url: "/api/v1/news/news",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
});

export const fetchNewsByCategoryId = createAsyncThunk(
  "news/fetchNewsByCategoryId",
  async (id) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/news/categories/${id}/news`,
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
    [fetchNews.pending]: (state) => {
      state.loading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchNewsByCategoryId.pending]: (state) => {
      state.loading = true;
    },
    [fetchNewsByCategoryId.fulfilled]: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },
    [fetchNewsByCategoryId.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default newsSlice.reducer;
