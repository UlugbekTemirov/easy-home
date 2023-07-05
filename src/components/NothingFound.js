import React from "react";
import Translate from "../utils/Translate";

function NothingFound() {
  const dict = {
    uz: "Hech narsa topilmadi",
    ru: "Ничего не найдено",
    en: "Nothing found",
  };

  return (
    <h1 className="text-3xl font-semibold text-center text-[#0045b7]">
      <Translate dictionary={dict} />
    </h1>
  );
}

export default NothingFound;
