import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  categories: [],
  loading: false,
  error: null,
  activeCategoryId: "all",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: "/api/v1/news/categories",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategoryId: (state, action) => {
      state.activeCategoryId = action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.categories.results.unshift({
        id: "all",
        name: {
          en: "All",
          ru: "Все",
          uz: "Hammasi",
        },
        value: "all",
      });
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export const { setActiveCategoryId } = categoriesSlice.actions;
export default categoriesSlice.reducer;
