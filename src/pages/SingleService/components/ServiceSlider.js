import React from "react";
import Slider from "../../../components/Slider";
import "./main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";
import "swiper/css/effect-cube";

const ServiceSlider = ({ images }) => {
  return (
    <div>
      <div className="service-slider md:block hidden">
        <Slider slides={images} />
      </div>
      <div className="md:hidden mb-10">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="cube-slider"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img className="w-full h-[300px]" src={image} alt="#" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;
