import React from "react";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import LanglessRedirect from "../../../components/LanglessRedirect";

function OtherPosts() {
  const selectedBlog = createSelector(
    (state) => state.homeBlog.blogs,
    (state) => state.homeBlog.activeblogId,
    (blogs, activeblogId) =>
      blogs?.results?.find((blog) => blog.id === activeblogId)
  );

  const activeBlog = useSelector(selectedBlog);

  const handlePrev = () => {
    const swiper = document.querySelector("#other-posts").swiper;
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = document.querySelector("#other-posts").swiper;
    swiper.slideNext();
  };
  if (!activeBlog) return;

  return (
    <div className="other-posts">
      <div className="active-blog-content text-[#666]">
        <LanglessRedirect to={`/news/${activeBlog.slug}`}>
          <h2 className="text-[24px] font-semibold text-[#000] hover:text-[#00c6ff] cursor-pointer">
            <Translate dictionary={activeBlog?.title} />
          </h2>
        </LanglessRedirect>

        <p className="max-w-[500px] mt-1">
          <Translate dictionary={activeBlog?.description} />
        </p>

        <p className="flex gap-2 items-center mt-3">
          <i className="fa-regular fa-calendar"></i>
          <DateFormatter date={activeBlog?.updated_at} />
        </p>
        <div className="flex justify-between items-center mt-10 mb-5 md:mb-0">
          <LanglessRedirect to={`/news/${activeBlog.slug}`}>
            <button className=" py-3 px-16 rounded-3xl bg-gradient-to-r from-primary-0 to-secondary-0 text-white">
              <Translate
                dictionary={{
                  uz: "Batafsil o'qish",
                  ru: "Подробнее",
                  en: "Read more",
                }}
              />
            </button>
          </LanglessRedirect>

          <div className="navigation flex md:hidden gap-1">
            <div
              onClick={handlePrev}
              className="prev  hover:bg-gradient-to-r from-primary-0 to-secondary-0"
            >
              <i className="fas fa-chevron-left"></i>
            </div>
            <div
              onClick={handleNext}
              className="next hover:bg-gradient-to-r from-primary-0 to-secondary-0"
            >
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPosts;
