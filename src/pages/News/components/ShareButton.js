import React from "react";
import { BiShareAlt } from "react-icons/bi";

const ShareButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="rounded-full p-2 duration-100 hover:scale-110"
      onClick={onClick}
    >
      <BiShareAlt size={35} color="#FF1F59" />
    </button>
  );
};

export default ShareButton;
