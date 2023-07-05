import React from "react";

// components
import FeaturedPosts from "./FeaturedPosts";
import Categories from "../../../components/Categories";
import Search from "../../../components/Search";

// db

const Sidebar = () => {
  return (
    <div className="sticky top-10 left-0 ">
      <Search />
      <div className="xl:mt-10">
        <FeaturedPosts />
      </div>
      <div className="xl:mt-10">
        <Categories />
      </div>
    </div>
  );
};

export default Sidebar;
