import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  solutions: [],
  loading: true,
  error: null,
};

export const fetchSoltuions = createAsyncThunk(
  "solution/fetchSolutions",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/service/solutions//?page_size=100`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSoltuions.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchSoltuions.fulfilled, (state, action) => {
        state.loading = false;
        state.solutions = action.payload;
      })
      .addCase(fetchSoltuions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default solutionsSlice.reducer;
