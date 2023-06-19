import React from "react";
import IntroImages from "./IntroImages";
import IntroContent from "./IntroContent";

function AboutIntro() {
  return (
    <div className="about-intro flex flex-col xl:flex-row items-center gap-10">
      <div data-aos="fade-right" className="left-side xl:w-3/5">
        <IntroImages />
      </div>
      <div data-aos="fade-left" className="right-side xl:w-2/5">
        <IntroContent />
      </div>
    </div>
  );
}

export default AboutIntro;
