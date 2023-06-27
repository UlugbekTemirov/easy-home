import React from "react";
import { product_cats } from "../../../db/categories.db";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../../redux/home.slice";
import classnames from "classnames";
import Translate from "../../../utils/Translate";
import GradientBtn from "../../../components/GradientBtn";

function HomeProductCategories() {
  const { activeCategory } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
  };

  const allCategory = {
    id: 0,
    name: {
      uz: "Barchasi",
      ru: "Все",
      en: "All",
    },
    value: "all",
  };

  const renderCategories = () => {
    return product_cats.map((category) => {
      const classNames = classnames("category-item", {
        active: activeCategory === category.value,
      });
      return (
        <GradientBtn
          key={category.id}
          className={`${classNames}`}
          onClick={() => handleCategoryChange(category.value)}
        >
          <Translate dictionary={category.name} />
        </GradientBtn>
      );
    });
  };

  return (
    <div className="flex items-center justify-center gap-1">
      <GradientBtn
        className={`category-item ${activeCategory === "all" ? "active" : ""}`}
        onClick={() => handleCategoryChange(allCategory.value)}
      >
        <Translate dictionary={allCategory.name} />
      </GradientBtn>
      {renderCategories()}
    </div>
  );
}

export default HomeProductCategories;
