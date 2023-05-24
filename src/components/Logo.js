import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className=" font-extrabold text-2xl">LOGO</h1>
      {/* <img
        className="w-[150px]"
        src="https://raistheme.com/wp/gostudy/wp-content/uploads/2021/05/gostudy-logo-dark.png"
        alt="logo"
      /> */}
    </Link>
  );
};

export default Logo;
