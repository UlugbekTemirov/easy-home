import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  pageImage: [],
  loading: true,
};

export const getPageImage = createAsyncThunk(
  "pageImage/getPageImage",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/about/page-image/",
    });
    return response;
  }
);

const pageImageSlice = createSlice({
  name: "pageImage",
  initialState,
  reducers: {},
  extraReducers: {
    [getPageImage.pending]: (state, action) => {
      state.loading = true;
    },
    [getPageImage.fulfilled]: (state, action) => {
      state.pageImage = action.payload;
      state.loading = false;
    },
    [getPageImage.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default pageImageSlice.reducer;
