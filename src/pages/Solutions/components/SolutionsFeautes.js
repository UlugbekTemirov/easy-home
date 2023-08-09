import React from "react";
import Translate from "../../../utils/Translate";
import staticIcon from "../../../assets/icons/smarthome.png";

function SolutionsFeautes({ features }) {
  const renderFeatures = () => {
    if (!features.length) return;

    return features.map((item, index) => {
      return (
        <div
          key={index}
          className="single-icon-box flex items-center gap-2 lg:gap-8"
        >
          <div className="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px]">
            <img
              className="w-full h-full object-contain object-center"
              src={item.icon ? item.icon : staticIcon}
              alt=""
            />
          </div>
          <p className="feauter-title text-[#0045b7] font-bold lg:text-[18px]">
            <Translate dictionary={item.title} />
          </p>
        </div>
      );
    });
  };

  if (!features.length) return;

  return (
    <div className="feautes-box flex flex-row gap-5 lg:flex-col lg:gap-0">
      {renderFeatures()}
    </div>
  );
}

export default SolutionsFeautes;
