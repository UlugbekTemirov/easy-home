import React from "react";

// components
import Search from "./Search";
import Categories from "../../../components/Categories";
import PriceFilter from "./PriceFilter";

// db
import { product_cats } from "../../../db/categories.db";

const addAllCategory = (categories) => {
  return [
    {
      id: 0,
      name: {
        en: "All",
        ru: "Все",
        uz: "Hammasi",
      },
      slug: "all",
      amount: 60,
    },
    ...categories,
  ];
};

const Sidebar = () => {
  return (
    <div className="w-full">
      <Search />
      <div className="grid xl:grid-cols-1 md:grid-cols-2 xl:gap-0 gap-5 xl:pt-5">
        <Categories categories={addAllCategory(product_cats)} />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
