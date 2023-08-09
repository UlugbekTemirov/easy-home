import React, { useEffect } from "react";
import { useState } from "react";
import Translate from "../utils/Translate";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSoltuions } from "../redux/solutions.slice";

function SolutionsNavBnt({ content, top }) {
  const [isOpen, setIsOpen] = useState(false);
  const { solutions, loading } = useSelector((state) => state.solutions);
  const { lang } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (solutions.results) return;
    dispatch(fetchSoltuions());

    // eslint-disable-next-line
  }, []);

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
      {isOpen && (
        <div className="dropdown-content flex flex-col">
          {loading ? (
            <h1>
              <Translate
                dictionary={{
                  uz: "Yuklanmoqda...",
                  ru: "Загрузка...",
                  en: "Loading...",
                }}
              />
            </h1>
          ) : !solutions.results || !solutions.results.length ? null : (
            solutions.results.map((solution) => {
              return (
                <Link
                  to={`${lang}/solutions/${solution.slug}`}
                  className="text-[#7a7777] hover:text-primary duration-200 px-2 border-b border-black"
                  key={solution.id}
                >
                  <Translate dictionary={solution?.name} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default SolutionsNavBnt;
