import { configureStore } from "@reduxjs/toolkit";
import selectLang from "./select_lang.slice";
import filter from "./filter.slice";

export const store = configureStore({
  reducer: {
    selectLang,
    filter,
  },
});
