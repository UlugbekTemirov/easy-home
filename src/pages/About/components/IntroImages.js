import React from "react";
//import media files
import smart1 from "../../../assets/images/smart1.jpeg";
import smart2 from "../../../assets/images/smart2.jpg";
import smart3 from "../../../assets/images/smart3.jpg";

import { useSelector } from "react-redux";
import { BASE_URL } from "../../../config";

function IntroImages() {
  const { pageImage } = useSelector((state) => state.pageImage);
  return (
    <div className="image-box flex items-center flex-col md:flex-row gap-7">
      <div className="left-side flex flex-col items-end gap-7">
        <img
          src={
            pageImage?.about_intro1
              ? BASE_URL + pageImage?.about_intro1
              : smart1
          }
          alt=""
        />
        <img
          className="md:max-w-[80%] lg:max-w-[50%]"
          src={
            pageImage?.about_intro2
              ? BASE_URL + pageImage?.about_intro2
              : smart2
          }
          alt=""
        />
      </div>
      <div className="right-side">
        <img
          className="w-[1000px]"
          src={
            pageImage?.about_intro3
              ? BASE_URL + pageImage?.about_intro3
              : smart3
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default IntroImages;
