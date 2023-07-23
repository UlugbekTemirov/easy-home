import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  blogs: [],
  loading: true,
  error: null,
  activeblogId: 1,
};

export const fetchHomeBlogs = createAsyncThunk(
  "homeBlog/fetchHomeBlogs",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/news/news/?page_size=5",
    });
    return response;
  }
);

const homeBlogSlice = createSlice({
  name: "homeBlog",
  initialState: initialState,
  reducers: {
    setActiceBlogId: (state, action) => {
      state.activeblogId = action.payload;
    },
  },
  extraReducers: {
    [fetchHomeBlogs.pending]: (state) => {
      state.loading = true;
    },
    [fetchHomeBlogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.blogs = action.payload;
    },
    [fetchHomeBlogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setActiceBlogId } = homeBlogSlice.actions;
export default homeBlogSlice.reducer;
