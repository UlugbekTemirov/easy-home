import React from "react";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";
import LanglessRedirect from "../../../components/LanglessRedirect";

function BlogCard({ slug, title, image, updated_at }) {
  return (
    <div className="blog-card border mt-5 rounded-lg">
      <LanglessRedirect to={`/news/${slug}`}>
        <div className="blog-card-inner">
          <div
            className="blog-card__image-box w-full h-[230px] rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full h-full opacity-0 bg-white hover:opacity-20"></div>
          </div>
          <div className="flex flex-col justify-between p-4 border-t-2">
            <p className="title font-semibold text-[20px] hover:text-[#00c6ff] mt-3 cursor-pointer">
              <Translate dictionary={title} />
            </p>
            <div className="flex gap-2 items-center mt-2">
              <i className="fa-regular fa-calendar"></i>
              <DateFormatter date={updated_at} />
            </div>
          </div>
        </div>
      </LanglessRedirect>
    </div>
  );
}

export default BlogCard;
