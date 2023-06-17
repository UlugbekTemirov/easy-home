import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../../utils/Translate";
import { HiArrowRight } from "react-icons/hi";

const ServiceCard = ({ title, image, key_features, slug }) => {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden flex flex-col justify-between">
      <div>
        <img src={image} alt="" className="w-full h-[200px] object-center" />
        <div className="p-5">
          <h1 className="font-bold text-2xl">
            <Translate dictionary={title} />
          </h1>
          <ul className="mt-3 list-disc pl-4">
            {key_features.map((feature, index) => (
              <li className="text-lg font-medium text-secondary" key={index}>
                <Translate dictionary={feature.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        className="border-t-2 p-4 flex justify-between items-center hover:bg-gray-50 transition-all"
        to={slug}
      >
        <h1 className="font-semibold text-xl">
          <Translate
            dictionary={{
              uz: "Batafsil",
              ru: "Подробнее",
              en: "Learn More",
            }}
          />
        </h1>
        <HiArrowRight color="#000" size={20} />
      </Link>
    </div>
  );
};

export default ServiceCard;
