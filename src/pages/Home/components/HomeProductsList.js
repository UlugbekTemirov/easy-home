import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HomeProductCard from "./HomeProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Translate from "../../../utils/Translate";
import LanglessRedirect from "../../../components/LanglessRedirect";
import NothingFound from "../../../components/NothingFound";

//import function
import {
  fetchHomeProducts,
  fetchHomeProductsByCategory,
} from "../../../redux/homeproducts.slice";
import HomeProductsLoader from "./HomeProductsLoader";

function HomeProductsList() {
  const swiperRef = React.useRef(null);
  const { products, loading, error } = useSelector(
    (state) => state.homeProducts
  );
  const { activeCategory } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (activeCategory === "all") {
      dispatch(fetchHomeProducts());
      return;
    }
    dispatch(fetchHomeProductsByCategory(activeCategory));

    // eslint-disable-next-line
  }, [activeCategory]);

  const handleLoading = () => {
    const array = [1, 2, 3, 4, 5];
    return array.map((item) => {
      return (
        <SwiperSlide key={item}>
          <HomeProductsLoader />
        </SwiperSlide>
      );
    });
  };

  const renderProducts = () => {
    return products?.results?.map((product) => {
      return (
        <SwiperSlide key={product?.id}>
          <HomeProductCard {...product} />
        </SwiperSlide>
      );
    });
  };

  if (error) return <p>Error</p>;

  return (
    <div className="products-list mt-12">
      <div className="min-h-[400px]">
        <Swiper
          ref={swiperRef}
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
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
          {loading ? (
            handleLoading()
          ) : products.results && products.results.length === 0 ? (
            <NothingFound />
          ) : (
            renderProducts()
          )}
        </Swiper>
      </div>

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
