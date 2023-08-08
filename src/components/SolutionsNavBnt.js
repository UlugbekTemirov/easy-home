import React from "react";
import { useState } from "react";
import Translate from "../utils/Translate";

function SolutionsNavBnt({ content, top }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown-container mt-3 lg:mt-0"
      onMouseLeave={closeDropdown}
    >
      <button
        className={`lg:px-2 dropdown-button flex items-center justify-center gap-1  ${
          top > 50 ? "lg:text-primary" : "lg:text-white"
        } text-[#29303b] border border-transparent text-xl md:text-[16px] lg:font-bold lg:uppercase lg:py-[5px] duration-200 ${
          isOpen ? "bg-[#eee] text-primary" : ""
        } hover:text-primary`}
        onClick={toggleDropdown}
        onTouchStart={toggleDropdown}
        onMouseEnter={toggleDropdown}
      >
        <Translate
          dictionary={{ uz: "Yechimlar", ru: "Решения", en: "Solutions" }}
        />
        <i className="fa-solid fa-arrow-down text-[14px]"></i>
      </button>
      {isOpen && <div className="dropdown-content">{content}</div>}
    </div>
  );
}

export default SolutionsNavBnt;
