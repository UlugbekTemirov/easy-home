import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  homeServices: {},
  loading: true,
  error: null,
};

export const fetchHomeServices = createAsyncThunk(
  "homeServices/fetchHomeServices",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/service/?page_size=3`,
    });

    return response;
  }
);

const homeServicesSlice = createSlice({
  name: "homeServices",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHomeServices.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchHomeServices.fulfilled]: (state, action) => {
      state.loading = false;
      state.homeServices = action.payload;
    },
    [fetchHomeServices.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer } = homeServicesSlice;
export default reducer;
