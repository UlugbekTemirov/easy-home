import React from "react";
import { news_cats } from "../../../db/categories.db";
import Translate from "../../../utils/Translate";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryButton = ({ category }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const category_colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-orange-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
  ];

  const assignColor = (cats) => {
    const obj = {};
    cats.forEach(({ value }, index) => {
      obj[value] = category_colors[index];
    });
    return obj;
  };

  const getCategoryTitle = (cats, category) => {
    const title = cats.find((cat) => cat.value === category).name;
    return <Translate dictionary={title} />;
  };

  const setCategorySearch = (category) => {
    const params = new URLSearchParams(location.search);
    params.set("category", category);
    navigate(`?${params.toString()}`);
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setCategorySearch(category);
      }}
      className={`${
        assignColor(news_cats)[category]
      } text-white pb-1 pt-2 rounded-2xl text-lg shadow-lg px-3 font-semibold`}
      type="button"
    >
      {getCategoryTitle(news_cats, category)}
    </button>
  );
};

export default CategoryButton;
