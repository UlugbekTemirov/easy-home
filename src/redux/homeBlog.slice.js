import { createSlice } from "@reduxjs/toolkit";
import { news } from "../db/news.db";

const initialState = {
  blogs: [...news],
  loading: false,
  error: null,
  activeblogId: 1,
};

const homeBlogSlice = createSlice({
  name: "homeBlog",
  initialState: initialState,
  reducers: {
    setActiceBlogId: (state, action) => {
      state.activeblogId = action.payload;
    },
  },
});

export const { setActiceBlogId } = homeBlogSlice.actions;
export default homeBlogSlice.reducer;
