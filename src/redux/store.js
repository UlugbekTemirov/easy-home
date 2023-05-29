import { configureStore } from "@reduxjs/toolkit";
import selectLang from "./select_lang.slice";
import filter from "./filter.slice";
import product from "./product.slice";

export const store = configureStore({
  reducer: {
    selectLang,
    filter,
    product,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
