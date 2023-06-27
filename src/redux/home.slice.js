import { createSlice } from "@reduxjs/toolkit";

const initialsState = {
  activeCategory: "all",
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialsState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = homeSlice.actions;
export default homeSlice.reducer;
