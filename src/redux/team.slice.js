import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  teamMembers: [],
  loading: false,
  error: null,
};

export const fetchTeamMembers = createAsyncThunk(
  "team/fetchTeamMembers",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/about/team/",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeamMembers.pending]: (state) => {
      state.loading = true;
    },
    [fetchTeamMembers.fulfilled]: (state, action) => {
      state.loading = false;
      state.teamMembers = action.payload;
    },
    [fetchTeamMembers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default teamSlice.reducer;
