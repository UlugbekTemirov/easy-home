import React from "react";
import Shareline from "./Shareline";
import Translate from "../../../utils/Translate";

import { useSelector } from "react-redux";

const Sidebar = () => {
  const { is_navbar_hidden } = useSelector((state) => state.navbar);

  return (
    <div className="h-full grid grid-rows-2 pb-20">
      <div className="row-span-1 pb-[100px]">
        <div
          className={`sticky duration-200 ${
            is_navbar_hidden ? "top-10" : "top-[120px]"
          }`}
        >
          <p className="text-gray-600 text-lg mb-2">
            <Translate
              dictionary={{
                en: "5 min read",
                ru: "5 мин чтения",
                uz: "5 daqiqada o'qish",
              }}
            />
          </p>
          <h1 className="font-semibold text-[22px] mb-2 text-primary">
            <Translate
              dictionary={{
                en: "Share this post :",
                ru: "Поделиться этой статьей :",
                uz: "Bu postni ulashish :",
              }}
            />
          </h1>
          <Shareline />
        </div>
      </div>
      <div>
        <div
          className={`sticky duration-200 ${
            is_navbar_hidden ? "top-10" : "top-[120px]"
          }`}
        >
          <h1>Newsletter</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
