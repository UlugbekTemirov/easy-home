import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

export const selectLangSlice = createSlice({
  name: "selectLang",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { setLanguage } = selectLangSlice.actions;

export default selectLangSlice.reducer;
