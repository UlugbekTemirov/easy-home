import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  solution: {},
  loading: true,
  error: null,
};

export const fetchSolution = createAsyncThunk(
  "solution/fetchSolution",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/service/solutions//${slug}/`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const singleSolutionSlice = createSlice({
  name: "singleSolution",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSolution.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSolution.fulfilled, (state, action) => {
        state.loading = false;
        state.solution = action.payload;
      })
      .addCase(fetchSolution.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default singleSolutionSlice.reducer;
