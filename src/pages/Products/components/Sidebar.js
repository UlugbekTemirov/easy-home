import React from "react";
import { useSelector } from "react-redux";

// components
import PriceFilter from "./PriceFilter";
import Search from "../../../components/Search";
import ProductCategories from "./ProductCategories";
import { setSearchValue } from "../../../redux/productsCategories.slice";

const Sidebar = () => {
  const { seacrhValue } = useSelector((state) => state.productsCategories);
  return (
    <div className="w-full">
      <Search
        setSearchValue={setSearchValue}
        page="products"
        value={seacrhValue}
      />
      <div className="grid xl:grid-cols-1 md:grid-cols-2 xl:gap-0 gap-5 xl:pt-5">
        <ProductCategories />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
