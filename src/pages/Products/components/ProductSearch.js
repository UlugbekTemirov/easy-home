import React from "react";
import { BsSearch } from "react-icons/bs";

const ProductSearch = () => {
  return (
    <div className="flex xl:justify-center md:justify-start justify-center">
      <div className="md:w-fit w-full bg-color-search-bg md:p-8 p-4">
        <div className="flex w-full rounded-md overflow-hidden">
          <input
            className="outline-none p-[10px_20px] md:text-lg w-full"
            type="text"
            placeholder="Search..."
          />
          <label className="bg-white flex justify-center items-center px-5 cursor-pointer hover:bg-gray-50">
            <BsSearch size={22} color="#000" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
