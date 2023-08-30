import React, { useEffect } from "react";
import { product_cats } from "../../../db/categories.db";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../../redux/home.slice";
import classnames from "classnames";
import Translate from "../../../utils/Translate";
import GradientBtn from "../../../components/GradientBtn";
import { fetchProductsCategories } from "../../../redux/productsCategories.slice";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper";

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
        <SwiperSlide>
          <GradientBtn
            key={category.id}
            className={`${classNames}`}
            onClick={() => handleCategoryChange(category.slug)}
          >
            <Translate dictionary={category.name} />
          </GradientBtn>
        </SwiperSlide>
      );
    });
  };

  return (
    <div id="cat-swip" data-aos="fade-up" className="w-full">
      <Swiper
        // navigation={window.innerWidth < 750 ? false : true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {loading && error
          ? null
          : renderCategories(productsCategories?.results)}
      </Swiper>
    </div>
  );
}

export default HomeProductCategories;
