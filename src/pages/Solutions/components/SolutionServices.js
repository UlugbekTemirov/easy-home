import React from "react";
import Translate from "../../../utils/Translate";
import randomImage from "../../../assets/images/BOT923.jpeg";
import SolutionsFeautes from "./SolutionsFeautes";

function SolutionServices({ services }) {
  const renderServices = () => {
    if (!services.length) return;

    return services.map((item, index) => {
      return (
        <div
          key={index}
          className={`flex flex-wrap mb-[40px] lg:mb-[70px] ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
        >
          <div
            className={`content-side lg:pb-4 w-full lg:w-2/5 pr-5 flex flex-col justify-between ${
              index % 2 === 1 ? " lg:pl-5" : ""
            }`}
          >
            <div className="texts">
              <p
                className={`text-[#0045b7] font-bold text-[1.5rem] lg:text-[1.5rem] xl:text-[2rem]`}
              >
                <Translate dictionary={item?.name} />
              </p>
              <p className="text-[20px] leading-16 font-[300] mt-6">
                <Translate dictionary={item?.description} />
              </p>
            </div>
            <SolutionsFeautes features={item?.key_features} />
          </div>
          <div className="righ-side w-full lg:w-3/5">
            <img
              className="w-full h-auto rounded-md
            "
              src={item.image ? item.image : randomImage}
              alt=""
            />
          </div>
        </div>
      );
    });
  };

  return <div className="solution-services">{renderServices()}</div>;
}

export default SolutionServices;
