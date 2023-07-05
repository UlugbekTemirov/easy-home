import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  news: [],
  loading: false,
  error: null,
  searchValue: null,
};

//

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page_size = 10, page = 1, search = "" }) => {
    const { request } = useHttp();
    return await request({
      url: `/api/v1/news/news/?page_size=${page_size}&page=${page}${
        search ? `&search=${search}` : ""
      }`,
    });
  }
);

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
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fetchNewsByCategoryId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsByCategoryId.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNewsByCategoryId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default newsSlice.reducer;
export const { setSearchValue } = newsSlice.actions;
