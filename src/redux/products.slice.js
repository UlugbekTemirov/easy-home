import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/useHttp";

const initialState = {
  products: [],
  loading: true,
  error: null,
  loadMoreLoading: false,
  loadMoreError: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ search = "", page = 1, page_size = 10, range }) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/products?${
        search ? `search=${search}` : ""
      }&page=${page}&page_size=${page_size}${
        range ? `&price_range_min=${range[0]}&price_range_max=${range[1]}` : ""
      }`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (slug) => {
    const { request } = useHttp();
    const response = await request({
      url: `/api/v1/products/categories/${slug}/products`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  }
);
export const loadMoreProducts = createAsyncThunk(
  "products/loadMoreProducts",
  async (url) => {
    const { request } = useHttp();
    return await request({
      url,
    });
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetchProductsByCategory.pending]: (state) => {
      state.loading = true;
    },
    [fetchProductsByCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchProductsByCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [loadMoreProducts.pending]: (state) => {
      state.loadMoreLoading = true;
    },
    [loadMoreProducts.fulfilled]: (state, action) => {
      state.loadMoreLoading = false;
      state.products = {
        ...action.payload,
        results: [...state.products.results, ...action.payload.results],
      };
    },
    [loadMoreProducts.rejected]: (state, action) => {
      state.loadMoreLoading = false;
      state.loadMoreError = action.error;
    },
  },
});

export default productsSlice.reducer;
