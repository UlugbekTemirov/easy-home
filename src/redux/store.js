import { configureStore } from "@reduxjs/toolkit";
import selectLang from "./select_lang.slice";

export const store = configureStore({
  reducer: {
    selectLang,
  },
});
