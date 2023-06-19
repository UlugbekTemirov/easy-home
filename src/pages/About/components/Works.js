import React from "react";
import Translate from "../../../utils/Translate";
import ProggressList from "./ProggressList";

//import media files
import smart4 from "../../../assets/images/smart6.jpg";

function Works() {
  const titleLang = {
    en: "Discover a New Level of Convenience and Control",
    ru: "Откройте для себя новый уровень удобства и контроля",
    uz: "Qulaylik va nazoratning yangi darajasini kashf qiling",
  };
  const contentLang = {
    en: "Whether you're a homeowner looking to transform your living space or a professional seeking smart home solutions for your projects, Easy-Home is here to serve you. Explore our range of quality products, benefit from our expertise, and embark on an exciting journey towards a smarter home.",
    ru: "Будь вы владельцем дома, который хочет преобразить свое жилое пространство, или профессионал, ищущий решения для умного дома для своих проектов, Easy-Home здесь, чтобы служить вам. Исследуйте наш ассортимент качественных продуктов, воспользуйтесь нашими знаниями и отправляйтесь в увлекательное путешествие к более умному дому.",
    uz: "Agar siz uy egasi bo'lsangiz, yashash joyingizni o'zgartirmoqchi bo'lsangiz yoki loyihalar uchun Smart Home yechimlari qidirayotgan mutaxassis bo'lsangiz, Easy-Home sizga xizmat qilish uchun bu yerda. Sifatli mahsulotlarimizni o'rganing, bizning tajribamizdan foydalaning va Smart Home yo'liga yo'l harakatlaning.",
  };

  return (
    <div
      data-aos="fade-up"
      className="works grid grid-cols-1 md:grid-cols-5 gap-16 py-16 mt-20"
    >
      <div className="content col-span-1 md:col-span-2">
        <div className="header-line w-[80px] h-[2px] bg-btnPink"></div>
        <h2
          id="title"
          className="text-3xl font-bold text-[#29303B] text-[30px] leading-[42px] mt-5"
        >
          <Translate dictionary={titleLang} />
        </h2>
        <p className="text-[#686F7A] leading-[30px] mt-5">
          <Translate dictionary={contentLang} />
        </p>
        <ProggressList />
      </div>
      <div
        style={{ background: `url(${smart4}) no-repeat center center/cover` }}
        className="image col-span-1 md:col-span-3 min-h-[400px]"
      ></div>
    </div>
  );
}

export default Works;
