import React from "react";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

function OtherPosts() {
  const selectedBlog = createSelector(
    (state) => state.homeBlog.blogs,
    (state) => state.homeBlog.activeblogId,
    (blogs, activeblogId) => blogs.find((blog) => blog.id === activeblogId)
  );

  const activeBlog = useSelector(selectedBlog);
  const titleDict = {
    uz: "Ajoyib chegirmlalar mavsumi",
    ru: "Лучшие летние акции",
    en: "Best summer discounts",
  };

  const descriptionDict = {
    uz: "Beshinchi iyuldan yetti iyulgacha, barcha mahsulotlarga 20% chegirma. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ru: "С пятого июля по седьмое июля на все товары скидка 20%. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    en: "From July 5 to July 7, a 20% discount on all products, Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };

  return (
    <div className="other-posts">
      <div className="active-blog-content text-[#666]">
        <h2 className="text-[24px] font-semibold text-[#000] hover:text-[#00c6ff] cursor-pointer">
          <Translate dictionary={activeBlog?.title} />
        </h2>

        <p className="max-w-[500px] mt-1">
          <Translate dictionary={activeBlog?.description} />
        </p>

        <p className="flex gap-2 items-center mt-3">
          <i class="fa-regular fa-calendar"></i>
          <DateFormatter date={activeBlog?.date} />
        </p>
        <div className="flex justify-between items-center mt-10 mb-5 md:mb-0">
          <button className=" py-3 px-16 rounded-3xl bg-gradient-to-r from-primary-0 to-secondary-0 text-white">
            <Translate
              dictionary={{
                uz: "Batafsil o'qish",
                ru: "Подробнее",
                en: "Read more",
              }}
            />
          </button>
          <div className="navigation flex md:hidden gap-1">
            <div className="prev  hover:bg-gradient-to-r from-primary-0 to-secondary-0">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="next hover:bg-gradient-to-r from-primary-0 to-secondary-0">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherPosts;
