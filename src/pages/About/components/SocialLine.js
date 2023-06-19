import React, { useState } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import telegram from "../../../assets/icons/telegram.svg";
import instagram from "../../../assets/icons/instagram.svg";
import facebook from "../../../assets/icons/facebook.svg";

const SocialLine = ({ socials, index, colors }) => {
  const [socialLine, setSocialLine] = useState(false);

  const openSocialLine = () => {
    setSocialLine(!socialLine);
  };

  const icons = {
    telegram,
    instagram,
    facebook,
  };

  const iconClass = {
    telegram: "icon-telegram",
    instagram: "icon-instagram",
    facebook: "icon-facebook",
  };

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-5">
      {!socialLine && (
        <div data-aos="fade-left" className={`absolute bottom-[50px] right-0`}>
          <div className="flex flex-col">
            {socials.map(({ name, link }, ind) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl mb-3"
                key={ind}
              >
                <div
                  className="w-[45px] h-[45px] rounded-full flex justify-center items-center"
                  style={{ background: colors[index] }}
                >
                  <i className={`icon ${iconClass[name]}`}></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={openSocialLine}
        style={{
          backgroundColor: colors[index],
        }}
        className="rounded-full p-3 overflow-hidden"
        type=""
      >
        <IoShareSocialSharp data-aos="fade-up" color="white" size={28} />
      </button>
    </div>
  );
};

export default SocialLine;
