import React from "react";
import Translate from "../utils/Translate";

function SectionHeader({ titleDict, subtitleDict, centered = false }) {
  return (
    <>
      {!centered ? (
        <div data-aos="fade-up" className="mb-[50px]">
          <div className="header-line w-[100px] h-[3px] bg-gradient-to-r from-primary-0 to-secondary-0"></div>
          <h2
            id="title"
            className="inline-block text-3xl swiper-slide__content__title  mt-5"
          >
            <Translate dictionary={titleDict} />
          </h2>
          <p className="text-[#686F7A] leading-[30px] mt-2 uppercase">
            <Translate dictionary={subtitleDict} />
          </p>
        </div>
      ) : (
        <div
          data-aos="fade-up"
          className="mb-[50px] flex flex-col justify-center items-center"
        >
          <div>
            <div className="header-line w-[100px] h-[3px] bg-gradient-to-r from-primary-0 to-secondary-0"></div>
            <h2
              id="title"
              className="inline-block text-3xl swiper-slide__content__title  mt-5"
            >
              <Translate dictionary={titleDict} />
            </h2>
          </div>
          <p className="text-[#686F7A] leading-[30px] mt-2 uppercase text-center">
            <Translate dictionary={subtitleDict} />
          </p>
        </div>
      )}
    </>
  );
}

export default SectionHeader;
