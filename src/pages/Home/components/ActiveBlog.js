import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

function ActiveBlog() {
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
    <div className="active-post">
      <div className="image-box flex flex-col items-end gap-10 relative">
        <img
          id="blog-image"
          className="image w-[100%] object-contain h-[300px] md:h-[500px] rounded-lg overflow-hidden relative border p-4"
          src={activeBlog?.image}
        />
        <div className="hidden navigation md:flex gap-1">
          <div
            onClick={() => {
              handlePrev();
            }}
            className="prev hover:bg-gradient-to-r from-primary-0 to-secondary-0"
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
        {/* <div className="image-border w-[110%] h-full absolute right-0 top-[-100px] bg-[#f5f5f5] z-[-10]"></div> */}
      </div>
    </div>
  );
}

export default ActiveBlog;
