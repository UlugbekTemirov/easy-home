import React from "react";
import { Link } from "react-router-dom";
import Translate from "../../../utils/Translate";

function ServiceCard({ title, description, icon }) {
  return (
    <div
      data-aos="fade-up"
      className="col-span-1 shadow-service-card bg-white hover:bg-gradient-to-r hover:text-white from-primary-0 to-secondary-0 py-[50px] px-[40px] rounded-md"
    >
      <div className="flex flex-col items-center ">
        <div className="image-control relative">
          <Link className="flex justify-center items-center" to="#">
            <img src={icon} alt="" />
          </Link>
        </div>
        <div className="title-control text-[22px] font-semibold capitalize mb-3">
          <Link className="pointer" to="#">
            <Translate dictionary={title} />
          </Link>
        </div>
        <div className="home-service--description capitalize">
          <p className="text-center w-[90%] mx-auto ">
            <Translate dictionary={description} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
