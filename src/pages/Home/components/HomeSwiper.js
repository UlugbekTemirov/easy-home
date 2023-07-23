import React from "react";
import slides from "../../../db/homeSlider.db";
import { Swiper, SwiperSlide } from "swiper/react";
import Translate from "../../../utils/Translate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade]);

function HomeSwiper() {
  const { lang } = useSelector((state) => state.navbar);
  const { pageImage } = useSelector((state) => state.pageImage);

  const slideImages = [
    pageImage?.home_slider1,
    pageImage?.home_slider2,
    pageImage?.home_slider3,
  ];

  const renderSlides = () => {
    return slides.map((slide, index) => {
      return (
        <SwiperSlide key={slide.id}>
          <div
            className=" min-h-screen pt-[150px] md:pt-[200px] swiper-slide px-5 md:px-0 ]"
            style={{
              background: `url(${
                slideImages[index] ? BASE_URL + slideImages[index] : slide.image
              }) no-repeat center center/cover`,
            }}
          >
            <div className="swiper-slide__content flex flex-col items-center">
              <div
                data-aos="fade-down"
                className="swiper-slide__content__title text-center text-4xl md:text-5xl capitalize font-[700] leading-10 md:leading-[60px] mb-10"
              >
                <h1>
                  <Translate dictionary={slide.title} />
                </h1>
              </div>
              <div
                data-aos="fade-down"
                className="swiper-slide__content__subtitle"
              >
                <p className="text-[#222] leading-[2rem] md:max-w-[70%] text-center text-[18px] font-[500] mx-auto">
                  <Translate dictionary={slide.subtitle} />
                </p>
              </div>
              <div data-aos="fade-down" className="swiper-slide__content__btn">
                <Link to={`/${lang}` + slide.btn.path}>
                  <span className="bg-gradient-to-r from-primary-0 to-secondary-0 inline-block text-white h-[51px] leading-[51px] mt-10 text-[20px] rounded-[26px] font-light px-[40px] ">
                    <Translate dictionary={slide.btn.name} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination
        speed={1200}
        effect="fade"
      >
        {renderSlides()}
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
