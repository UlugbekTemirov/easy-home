import React, { useEffect } from "react";
import { useState } from "react";
import Translate from "../utils/Translate";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../redux/services.slice";
import { Link } from "react-router-dom";

function ServicesNavBtn({ close, top }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { services, loading } = useSelector((state) => state.services);
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    if (services.results) return;
    dispatch(fetchServices());

    //eslint-disable-next-line
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
          dictionary={{ uz: "Xizmatlar", ru: "Услуги", en: "Services" }}
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
          ) : !services.results || !services.results.length ? null : (
            services.results.map((service) => {
              return (
                <Link
                  onClick={close}
                  to={`${lang}/services/${service.slug}`}
                  className="text-[#7a7777] hover:text-primary duration-200 px-2 border-b border-black"
                  key={service.id}
                >
                  <Translate dictionary={service?.name} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default ServicesNavBtn;
