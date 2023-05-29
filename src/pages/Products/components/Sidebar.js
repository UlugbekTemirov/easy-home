import React from "react";

// components
import Search from "./Search";
import Categories from "../../../components/Categories";
import PriceFilter from "./PriceFilter";

// db
import { product_cats } from "../../../db/categories.db";

const Sidebar = () => {
  return (
    <div className="w-full">
      <Search />
      <div className="grid xl:grid-cols-1 md:grid-cols-2 xl:gap-0 gap-5 xl:pt-5">
        <Categories categories={product_cats} />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
