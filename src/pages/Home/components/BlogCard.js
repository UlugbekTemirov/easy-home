import React from "react";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";

function BlogCard({ slug, title, image, date }) {
  return (
    <div className="blog-card">
      <div className="blog-card-inner">
        <div
          className="blog-card__image-box w-full h-[230px] rounded-lg"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full opacity-0 bg-white hover:opacity-20"></div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="title font-semibold text-[20px] hover:text-[#00c6ff] mt-3 cursor-pointer">
            <Translate dictionary={title} />
          </p>
          <div className="flex gap-2 items-center">
            <i class="fa-regular fa-calendar"></i>
            <DateFormatter date={date} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
