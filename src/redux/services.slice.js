import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/service/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.loading = true;
    },
    [fetchServices.fulfilled]: (state, action) => {
      state.loading = false;
      state.services = action.payload;
    },
    [fetchServices.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default servicesSlice.reducer;
