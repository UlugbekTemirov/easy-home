import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import HomeProductCard from "./HomeProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Translate from "../../../utils/Translate";
import LanglessRedirect from "../../../components/LanglessRedirect";

function HomeProductsList() {
  const swiperRef = React.useRef(null);
  const productsSelector = createSelector(
    (state) => state.homeProducts.products,
    (state) => state.home.activeCategory,
    (products, activeCategory) => {
      if (activeCategory === "all") return products;
      return products.filter((product) => product.category === activeCategory);
    }
  );

  const products = useSelector(productsSelector);

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <SwiperSlide key={product.id}>
          <HomeProductCard {...product} />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="products-list mt-12">
      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {renderProducts()}
      </Swiper>

      <div
        data-aos="fade-up"
        className="flex items-center justify-center md:justify-between flex-wrap"
      >
        <div className="carousel-navigation flex items-center justify-center gap-5 my-10">
          <div className="line w-[70px] h-1 rounded-lg bg-gradient-to-r from-primary-0 to-secondary-0"></div>
          <div className="carousel-navigation-buttons flex items-center gap-1">
            <div
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
              }}
              className="prev hover:bg-gradient-to-r from-primary-0 to-secondary-0 transition-colors"
            >
              <i className="fa-solid fa-angle-left text-[#0045b7]"></i>
            </div>
            <div
              onClick={() => {
                swiperRef.current.swiper.slideNext();
              }}
              className="next hover:bg-gradient-to-r from-primary-0 to-secondary-0 transition-colors"
            >
              <i className="fa-solid fa-angle-right text-[#0045b7]"></i>
            </div>
          </div>
          <div className="line w-[70px] h-1 rounded-lg bg-gradient-to-r from-primary-0 to-secondary-0"></div>
        </div>
        <div className="md:my-10">
          <LanglessRedirect to={`/products`}>
            <button className="bg-gradient-to-r p-12 md:p-20 rounded-md py-3 md:py-3 text-white from-primary-0 to-secondary-0">
              <Translate
                dictionary={{
                  en: "View all products",
                  ru: "Посмотреть все продукты",
                  uz: "Barcha mahsulotlarni ko'rish",
                }}
              />
            </button>
          </LanglessRedirect>
        </div>
      </div>
    </div>
  );
}

export default HomeProductsList;
