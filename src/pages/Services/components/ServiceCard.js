import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../../utils/Translate";
import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ title, image, key_features, slug, index }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-delay={index * 100}
      data-aos-once="true"
      className="rounded-xl shadow-xl overflow-hidden flex flex-col justify-between bg-white"
    >
      <div className="flex md:flex-row flex-col md:h-[500px]">
        <img
          src={image}
          alt=""
          className="md:w-[40%] w-full object-center md:h-full h-[200px]"
        />
        <div className="flex flex-col justify-between md:w-[60%] w-full">
          <div className="p-5">
            <h1 className="font-bold md:text-3xl text-xl">
              <Translate dictionary={title} />
            </h1>
            <ul className="mt-3 list-disc pl-4">
              {key_features.map((feature, index) => (
                <li
                  className="md:text-2xl text-md font-medium text-secondary"
                  key={index}
                >
                  <Translate dictionary={feature.title} />
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="border-t-2 md:p-4 px-4 py-2 flex justify-between items-center hover:bg-gray-50 transition-all"
            to={slug}
          >
            <h1 className="md:font-semibold md:text-2xl text-lg text-gray-900">
              <Translate
                dictionary={{
                  uz: "Batafsil",
                  ru: "Подробнее",
                  en: "Learn More",
                }}
              />
            </h1>
            <HiArrowRight
              color="#444"
              size={window.innerWidth < 768 ? 20 : 24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
