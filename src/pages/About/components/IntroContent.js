import React from "react";
import { useSelector } from "react-redux";
import Translate from "../../../utils/Translate";

//import media files

function IntroContent() {
  const { lang } = useSelector((state) => state.navbar);

  function highlightWord() {
    const text = titleLang[lang];
    return text.replace(
      /White-Home/g,
      `<span style="color: red;">White-Home</span>`
    );
  }

  const titleLang = {
    en: "Welcome to White-Home : Your One-Stop Shop for Smart Home Solutions",
    ru: "Добро пожаловать в White-Home: ваш магазин решений для умного дома",
    uz: "White-Homega xush kelibsiz: Smart Home yechimlari uchun sizning do'koningiz",
  };

  const contentLang = {
    en: `   The future is here, and it starts with Easy-Home. Explore our wide range
    of smart home products and discover how you can transform your living
    space into a modern, intelligent oasis. Embrace the convenience,
    comfort, and energy efficiency that smart home technology offers.`,
    uz: `Kelajak shu erda, va u Easy-Home bilan boshlanadi. Smart Home mahsulotlarimizning keng doirasini
    o'rganing va yashashni o'zining modern, aqlli o'rtasiga aylantirishingiz mumkin
    joy. Smart Home texnologiyasi taklif etadigan qulayliklarni,
    qulaylik va energiya samaradorligini qabul qiling.`,
    ru: `Будущее здесь, и оно начинается с Easy-Home. Исследуйте наш широкий ассортимент
    продукты для умного дома и узнайте, как вы можете преобразить свою жизнь
    пространство в современный, интеллектуальный оазис. Примите удобство,
    комфорт и энергоэффективность, которые предлагает технология умного дома.`,
  };

  const renderBottomContent = () => {
    const elements = [
      {
        title: {
          en: "50+ Products",
          ru: "50+ Продукты",
          uz: "50+ Mahsulotlar",
        },
        content: {
          en: "We offer a wide range of smart home products, including smart lighting, smart security, smart entertainment, and more.",
          ru: "Мы предлагаем широкий ассортимент продуктов для умного дома, включая умное освещение, умную безопасность, умное развлечение и многое другое.",
          uz: "Biz Smart Home mahsulotlarining keng doirasini taklif etamiz, shu jumladan Smart Lighting, Smart Security, Smart Entertainment va boshqalar.",
        },
        icon: "icon-product",
      },
      {
        title: {
          en: "500+ Customers",
          ru: "500+ Клиенты",
          uz: "500+ Mijozlar",
        },
        content: {
          en: "Become one of the customers who have already transformed their homes with Easy-Home.",
          ru: "Станьте одним из клиентов, которые уже преобразили свои дома с Easy-Home.",
          uz: "Bizga qo'shiling va Easy-Home bilan uyini o'zgartirgan mijozlardan biri bo'ling.",
        },
        icon: "icon-customer",
      },
    ];
    return elements.map((item, index) => {
      return (
        <div className="flex gap-10" key={index}>
          <span className={`icon ${item.icon}`}></span>
          <div className="content">
            <h3 className="text-xl font-bold text-[#29303B] text-[24px] leading-[33px]">
              <Translate dictionary={item.title} />
            </h3>
            <p className="text-[#686F7A] leading-[30px] mt-2">
              <Translate dictionary={item.content} />
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="intro-content">
      <div className="header-line w-[80px] h-[2px] bg-btnPink"></div>
      <h2
        id="title"
        className="text-3xl font-bold text-[#29303B] text-[30px] leading-[42px] mt-5"
        dangerouslySetInnerHTML={{ __html: highlightWord() }}
      ></h2>
      <p className="text-[#686F7A] leading-[30px] mt-5">
        <Translate dictionary={contentLang} />
      </p>
      <div className="intro-content--footer flex flex-col gap-5  mt-5">
        {renderBottomContent()}
      </div>
    </div>
  );
}
export default IntroContent;
