import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/icons/version4.svg";

const Logo = ({ onClick, className }) => {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <Link onClick={onClick} to={`${lang}`}>
      <img
        className={`w-[100px] md:w-[130px] ${className}`}
        src={logo}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
