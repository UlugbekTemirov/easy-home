import React from "react";
import { useDispatch, useSelector } from "react-redux";

// helpers
import {
  categoryTitleHandler,
  category_colors,
  categorySearchHandler,
} from "../../../utils/helpers";

import { useLocation, useNavigate } from "react-router-dom";
import { setActiveCategoryId } from "../../../redux/newsCategories.slice";

const CategoryButton = ({ category, index }) => {
  const [location, navigate] = [useLocation(), useNavigate()];
  const { categories } = useSelector((state) => state.newsCategories);
  const dispatch = useDispatch();

  if (categories.results && categories?.results.length <= 0) {
    return <h1>Not found...</h1>;
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        categorySearchHandler(category, location, navigate);
        dispatch(setActiveCategoryId(category?.id));
      }}
      className={`${
        category_colors[index % category_colors.length]
      } text-white pb-1 pt-2 rounded-tl-2xl rounded-br-2xl -skew-x-12 text-lg shadow-lg px-3 font-semibold`}
      type="button"
    >
      {categoryTitleHandler(categories.results, category?.value)}
    </button>
  );
};

export default CategoryButton;
