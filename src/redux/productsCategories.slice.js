import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  productsCategories: [],
  loading: false,
  error: null,
  activeCategory: "all",
  seacrhValue: "",
};

export const fetchProductsCategories = createAsyncThunk(
  "productsCategories/fetchProductsCategories",
  async () => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/categories`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

const productsCategoriesSlice = createSlice({
  name: "productsCategories",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setSearchValue: (state, action) => {
      state.seacrhValue = action.payload;
    },
  },
  extraReducers: {
    [fetchProductsCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsCategories = action.payload;
      state.productsCategories.results.unshift({
        id: "all",
        name: {
          en: "All",
          ru: "Все",
          uz: "Hammasi",
        },
        slug: "all",
      });
    },
    [fetchProductsCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default productsCategoriesSlice.reducer;
export const { setActiveCategory, setSearchValue } =
  productsCategoriesSlice.actions;
