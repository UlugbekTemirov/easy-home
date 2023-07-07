import React from "react";
import { useSelector } from "react-redux";

// components
import FeaturedPosts from "./FeaturedPosts";
import Categories from "../../../components/Categories";
import Search from "../../../components/Search";

//import functions
import { setSearchValue } from "../../../redux/news.slice";

const Sidebar = () => {
  const { searchValue } = useSelector((state) => state.news);

  return (
    <div className="sticky top-10 left-0 ">
      <Search page="news" setSearchValue={setSearchValue} value={searchValue} />
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
