import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  contactDetails: [],
  loading: true,
  error: null,

  success: null,
  postLoading: false,
};

export const fetchContactDetails = createAsyncThunk(
  "contactDetails/fetchContactDetails",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/about/contact/",
    });
    console.log(response);
    return response;
  }
);

export const postContactDetails = createAsyncThunk(
  "contactDetails/postContactDetails",
  async (data) => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/contact/",
      method: "POST",
      data: data,
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

    [postContactDetails.pending]: (state, action) => {
      state.postLoading = true;
    },
    [postContactDetails.fulfilled]: (state, action) => {
      state.success = true;
      state.postLoading = false;
    },
  },
});

export default contactDetailsSlice.reducer;
