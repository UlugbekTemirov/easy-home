import React from "react";
import Container from "../layout/Container";
import SectionHeader from "./SectionHeader";
import TelMask from "./TelMask";
import Translate from "../utils/Translate";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

function NewsLetter() {
  const { lang } = useSelector((state) => state.navbar);

  const titleDict = {
    en: "Subscribe to our newsletter",
    ru: "Подпишитесь на нашу рассылку",
    uz: "Bizning xabarnomaga obuna bo'ling",
  };

  const subtitleDict = {
    en: "Get the latest news and updates about our products and services.",
    ru: "Получайте последние новости и обновления о наших продуктах и услугах.",
    uz: "Mahsulotlarimiz va xizmatlarimiz haqida so'nggi yangiliklarni va yangilanishlarni oling.",
  };

  const newsLetterLang = {
    en: "You have successfully subscribed to our newsletter!",
    ru: "Вы успешно подписались на нашу рассылку!",
    uz: "Siz muvaffaqiyatli bizning xabarnomamizga obuna bo'ldingiz!",
  };

  return (
    <div data-aos="fade-up" className="newsletter my-24">
      <Container>
        <div className="mt-[65px]">
          <div className="md:w-[600px] mx-auto">
            <SectionHeader
              titleDict={titleDict}
              subtitleDict={subtitleDict}
              centered={true}
            />
          </div>
        </div>
        <div className="phone-newsletter flex md:w-[900px] mx-auto">
          <div className="w-full rounded-l-[8px] p-[2px] pr-0 bg-gradient-to-r from-primary-0 to-secondary-0 ">
            <TelMask
              item={"newsletter"}
              className="w-full rounded-r-none mb-0"
            />
          </div>
          <div className="h-[51px]">
            <button
              onClick={() => {
                toast.success(
                  newsLetterLang[lang.toLowerCase()] || newsLetterLang["en"]
                );
              }}
              className="bg-gradient-to-r px-12 md:px-20 rounded-md rounded-l-none h-full flex items-center justify-center text-white from-primary-0 to-secondary-0"
            >
              <Translate
                dictionary={{
                  en: "Subscribe",
                  ru: "Подписывайся",
                  uz: "Obuna bo'lish",
                }}
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewsLetter;
