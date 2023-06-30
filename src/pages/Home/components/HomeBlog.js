import React from "react";
import Container from "../../../layout/Container";
import SectionHeader from "../../../components/SectionHeader";
import ActiveBlog from "./ActiveBlog";
import OtherPosts from "./OtherPosts";
import { Swiper, SwiperSlide } from "swiper/react";
import { news } from "../../../db/news.db";
import BlogCard from "./BlogCard";

function HomeBlog() {
  const titleDict = {
    en: "Latest News",
    ru: "Последние новости",
    uz: "So'nggi yangiliklar",
  };

  const subtitleDict = {
    en: "See what's new in the world of smart home technology, including tips, trends, news, and more.",
    ru: "Посмотрите, что нового в мире технологий умного дома, включая советы, тенденции, новости и многое другое.",
    uz: "Aqlli uy texnologiyalarining dunyosidagi yangiliklarni, maslahatlarini, trendlarini, yangiliklarini va boshqalarini ko'ring.",
  };

  const renderOtherPosts = () => {
    return news.map((item) => {
      return (
        <SwiperSlide className="h-auto" key={item.id}>
          <BlogCard {...item} />
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Container>
        <div className="mt-[65px]">
          <div className="md:w-[600px] mx-auto">
            <SectionHeader
              titleDict={titleDict}
              subtitleDict={subtitleDict}
              centered={true}
            />
          </div>
        </div>
      </Container>
      <div className="blog-content grid grid-cols-1 lg:grid-cols-2 gap-20  w-full mx-auto px-[12px] md:px-[120px]">
        <div data-aos="fade-right" className="col-span-1">
          <ActiveBlog />
        </div>
        <div data-aos="fade-left" className="col-span-1">
          <div className="h-full flex flex-col justify-between">
            <OtherPosts />
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="mySwiper"
                slideClass="swiper-slide"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }}
              >
                {renderOtherPosts()}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBlog;
