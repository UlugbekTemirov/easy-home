import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter.slice";
import product from "./product.slice";
import navbar from "./navbar.slice";
import home from "./home.slice";
import homeProducts from "./homeproducts.slice";
import homeBlog from "./homeBlog.slice";
import team from "./team.slice";
import news from "./news.slice";
import newsCategories from "./newsCategories.slice";
import featuredNewsSlice from "./featuredNews.slice";

export const store = configureStore({
  reducer: {
    filter,
    product,
    navbar,
    home,
    homeProducts,
    homeBlog,
    team,
    news,
    newsCategories,
    featuredNewsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
