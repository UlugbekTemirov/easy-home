import React from "react";

//imort meadia files
import leftSideBg from "../../../assets/images/BOT923.jpeg";
import rightSideBg from "../../../assets/images/group-face.jpg";
import Translate from "../../../utils/Translate";
import { useSelector } from "react-redux";

function ContactFooter() {
  const { contactDetails } = useSelector((state) => state.contactDetails);

  return (
    <div className="footer flex items-center h-[350px] md:h-[480px]">
      <div
        style={{
          background: `url(${leftSideBg}) no-repeat center center/cover`,
        }}
        className="footer-left w-0 md:w-2/5 h-full"
      ></div>
      <div
        className="footer-right w-full md:w-3/5 h-full"
        style={{
          background: `url(${rightSideBg}), no-repeat center center `,
        }}
      >
        <div
          className="footer-right-content w-full h-full flex justify-center flex-col pl-[40px] md:pl-[80px]"
          style={{
            backgroundImage:
              "linear-gradient(260deg, #EB5252 0%, #A13152 100%)",
            opacity: "0.92",
          }}
        >
          <h3 className="text-[30px] text-white  leading-[42px] font-bold">
            <Translate
              dictionary={{
                uz: "Biz bilan bog'laning",
                ru: "Свяжитесь с нами",
                en: "Contact us",
              }}
            />
            <br />
            <Translate
              dictionary={{
                uz: "va barcha savollaringizni javobini oling",
                ru: "и получите ответы на все ваши вопросы",
                en: "and get answers to all your questions",
              }}
            />
          </h3>
          <button className="inline-block mr-auto px-12 py-[14px] font-bold rounded-sm border-none shadow-sm mt-5 bg-white text-btnPink hover:bg-btnPink hover:text-[#fff] transition-colors duration-300">
            <a
              href={`${
                contactDetails?.phone_number1
                  ? `tel:${contactDetails.phone_number1}`
                  : "!#"
              }`}
            >
              <Translate
                dictionary={{ uz: "Bog'lanish", ru: "Контакт", en: "Contact" }}
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactFooter;
