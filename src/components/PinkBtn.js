import React from "react";

// state management functions
import { useSelector } from "react-redux";

function PinkBtn({ className, type = "submit", value, onClick = () => {} }) {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <input
      onClick={onClick}
      type={type}
      className={`py-3 px-5 align-middle text-white font-bold leading-0 bg-gradient-to-r from-primary-0 to-secondary-0 rounded-md cursor-pointer ${className}`}
      value={value[lang.toLowerCase()]}
    />
  );
}

export default PinkBtn;
