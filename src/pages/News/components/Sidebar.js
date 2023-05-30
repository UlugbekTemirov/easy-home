import React from "react";

// components
import Search from "../../Products/components/Search";
import RecentPosts from "./RecentPosts";
import Categories from "../../../components/Categories";

// db
import { news_cats } from "../../../db/categories.db";

const Sidebar = () => {
  return (
    <div className="sticky top-10 left-0 ">
      <Search />
      <div className="xl:mt-10">
        <RecentPosts />
      </div>
      <div className="xl:mt-10">
        <Categories categories={news_cats} />
      </div>
    </div>
  );
};

export default Sidebar;
