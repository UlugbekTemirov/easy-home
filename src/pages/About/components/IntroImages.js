import React from "react";
//import media files
import smart1 from "../../../assets/images/smart1.jpeg";
import smart2 from "../../../assets/images/smart2.jpg";
import smart3 from "../../../assets/images/smart3.jpg";

function IntroImages() {
  return (
    <div className="image-box flex items-center flex-col md:flex-row gap-7">
      <div className="left-side flex flex-col items-end gap-7">
        <img src={smart1} alt="" />
        <img className="md:max-w-[80%] lg:max-w-[50%]" src={smart2} alt="" />
      </div>
      <div className="right-side">
        <img className="w-[1000px]" src={smart3} alt="" />
      </div>
    </div>
  );
}

export default IntroImages;
