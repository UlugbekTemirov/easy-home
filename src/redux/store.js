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
import singleNews from "./singleNews.slice";
import featuredNews from "./featuredNews.slice";
import products from "./products.slice";
import featuredProducts from "./featuredProducts.slice";
import productsCategories from "./productsCategories.slice";
import singleProduct from "./singleProducts.slice";
import services from "./services.slice";
import singleService from "./singleService.slice";

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
    featuredNews,
    products,
    featuredProducts,
    productsCategories,
    singleProduct,
    services,
    singleService,
    singleNews,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
