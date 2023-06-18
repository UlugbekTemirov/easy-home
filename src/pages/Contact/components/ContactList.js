import React from "react";
import ContactCard from "./ContactCard";
import Translate from "../../../utils/Translate";

//import media files

function ContactList() {
  const numberLang = {
    en: "Our numbers",
    uz: "Bizning raqamlarimiz",
    ru: "Наши номера",
  };

  const emailLang = {
    en: "Email address",
    uz: "Email manzil",
    ru: "Электронная почта",
  };

  const locationLang = {
    en: "Our location",
    uz: "Bizning manzilimiz",
    ru: "Наше местоположение",
  };

  return (
    <>
      <div className="whitespace-pre-wrap">
        <h1 className="title text-[30px] text-center my-10 laeding-[42px] text-[#29303B] font-bold">
          <Translate
            dictionary={{
              en: "Our contact details",
              uz: "Bizning aloqa ma'lumotlarimiz",
              ru: "Наши контактные данные",
            }}
          />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <ContactCard
          className="col-span-1 bg-[#e5f8f6]"
          iconClassname="icon-phone"
          iconBg="bg-[#01bca7]"
          title={numberLang}
        >
          <span>
            + 61 (2) 8093 3402 <br />
            +61 (2) 8093 3402
          </span>
        </ContactCard>
        <ContactCard
          className="col-span-1 bg-[#fff0ea]"
          iconClassname="icon-email"
          title={emailLang}
          iconBg="bg-[#ff6d34]"
        >
          <span>
            admission@gostudy.com <br />
            info@gostudy.com
          </span>
        </ContactCard>
        <ContactCard
          className="col-span-1 bg-[#f3faf2]"
          iconClassname="icon-location"
          iconBg="bg-[#8dd17e]"
          title={locationLang}
        >
          <span>
            Amir Temur ko'chasi <br />
            5-uy
          </span>
        </ContactCard>
      </div>
    </>
  );
}

export default ContactList;
