import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter.slice";
import product from "./product.slice";
import navbar from "./navbar.slice";
import home from "./home.slice";
import homeProducts from "./homeproducts.slice";
import homeBlog from "./homeBlog.slice";

export const store = configureStore({
  reducer: {
    filter,
    product,
    navbar,
    home,
    homeProducts,
    homeBlog,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
