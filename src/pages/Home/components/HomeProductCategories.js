import React, { useEffect } from "react";
import { product_cats } from "../../../db/categories.db";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../../redux/home.slice";
import classnames from "classnames";
import Translate from "../../../utils/Translate";
import GradientBtn from "../../../components/GradientBtn";
import { fetchProductsCategories } from "../../../redux/productsCategories.slice";

function HomeProductCategories() {
  const { activeCategory } = useSelector((state) => state.home);
  const { productsCategories, loading, error } = useSelector(
    (state) => state.productsCategories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsCategories.length > 0) return;
    dispatch(fetchProductsCategories());

    // eslint-disable-next-line
  }, []);

  const handleCategoryChange = (category) => {
    dispatch(setActiveCategory(category));
  };

  const renderCategories = (product_cats) => {
    return product_cats?.map((category) => {
      const classNames = classnames("category-item", {
        active: activeCategory === category.slug,
      });
      return (
        <GradientBtn
          key={category.id}
          className={`${classNames}`}
          onClick={() => handleCategoryChange(category.slug)}
        >
          <Translate dictionary={category.name} />
        </GradientBtn>
      );
    });
  };

  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center gap-1 flex-wrap"
    >
      {loading && error ? null : renderCategories(productsCategories?.results)}
    </div>
  );
}

export default HomeProductCategories;
