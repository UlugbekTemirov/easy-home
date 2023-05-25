import React from "react";

// components
import ProductSearch from "./ProductSearch";
import Categories from "./Categories";
import PriceFilter from "./PriceFilter";

const Sidebar = () => {
  return (
    <div className="w-full">
      <ProductSearch />
      <div className="grid xl:grid-cols-1 md:grid-cols-2 xl:gap-0 gap-5 xl:pt-5">
        <Categories />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
