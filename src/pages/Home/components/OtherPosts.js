import React from "react";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";

function OtherPosts() {
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
          <Translate dictionary={titleDict} />
        </h2>

        <p className="max-w-[500px] mt-1">
          <Translate dictionary={descriptionDict} />
        </p>

        <p className="flex gap-2 items-center mt-3">
          <i class="fa-regular fa-calendar"></i>
          <DateFormatter date="2021-07-05" />
        </p>
        <button className="mt-10 py-3 px-16 rounded-3xl bg-gradient-to-r from-primary-0 to-secondary-0 text-white">
          <Translate
            dictionary={{
              uz: "Batafsil o'qish",
              ru: "Подробнее",
              en: "Read more",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default OtherPosts;
