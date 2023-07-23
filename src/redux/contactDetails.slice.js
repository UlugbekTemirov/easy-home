import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  contactDetails: [],
  loading: true,
  error: null,
};

export const fetchContactDetails = createAsyncThunk(
  "contactDetails/fetchContactDetails",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/about/contact/",
    });
    return response;
  }
);

const contactDetailsSlice = createSlice({
  name: "contactDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchContactDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchContactDetails.fulfilled]: (state, action) => {
      state.contactDetails = action.payload;
      state.loading = false;
    },
  },
});

export default contactDetailsSlice.reducer;
