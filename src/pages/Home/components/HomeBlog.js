import React, { useEffect, useRef } from "react";
import Container from "../../../layout/Container";
import SectionHeader from "../../../components/SectionHeader";
import ActiveBlog from "./ActiveBlog";
import OtherPosts from "./OtherPosts";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "./BlogCard";
import { useSelector, useDispatch } from "react-redux";
import { setActiceBlogId, fetchHomeBlogs } from "../../../redux/homeBlog.slice";
import SwiperCore, { Pagination } from "swiper";
import HomeBlogLoader from "./HomeBlogLoader";
SwiperCore.use([Pagination]);

function HomeBlog() {
  const { blogs, loading, error } = useSelector((state) => state.homeBlog);
  const dispatch = useDispatch();
  const swiperRef = useRef(null);

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

  useEffect(() => {
    if (blogs?.results && blogs?.results?.length > 0) return;
    dispatch(fetchHomeBlogs());

    //eslint-disable-next-line
  }, []);

  const renderOtherPosts = (blogs) => {
    if (!blogs) return;
    return blogs?.results?.map((item) => {
      return (
        <SwiperSlide className="h-auto" key={item.id}>
          <BlogCard {...item} />
        </SwiperSlide>
      );
    });
  };

  if (loading)
    return (
      <Container>
        <HomeBlogLoader />
      </Container>
    );
  if (error) return;

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
        <div data-aos="fade-up" className="col-span-1">
          <ActiveBlog />
        </div>
        <div data-aos="fade-up" className="col-span-1">
          <div className="h-full flex flex-col justify-between">
            <OtherPosts />
            <div className="w-full">
              <Swiper
                id="other-posts"
                ref={swiperRef}
                className="h-auto"
                slidesPerView={2}
                loop={true}
                spaceBetween={20}
                slidesPerGroup={1}
                onSlideChange={(swiper) => {
                  dispatch(setActiceBlogId(swiper.realIndex + 1));
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
              >
                {renderOtherPosts(blogs)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBlog;
