import React, { useEffect } from "react";
import Translate from "../utils/Translate";
import MiniHeader from "./MiniHeader";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  setActiveCategoryId,
} from "../redux/newsCategories.slice";
import CategoryLoadingSkeletList from "./CategoryLoadingSkeletList";
import { setSearchValue } from "../redux/news.slice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.newsCategories
  );
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  const categoryHandler = (value, categoryId) => {
    if (value === "all") return navigate(`/${lang}/news`);
    else navigate(`?category=${value}&id=${categoryId}`);
  };

  if (error) return <h1>Error...</h1>;

  if (categories.results && categories?.results.length === 0) {
    return <h1>Not found...</h1>;
  }

  return (
    <div className="mt-5">
      <MiniHeader
        title={{
          en: "Categories",
          ru: "Категории",
          uz: "Kategoriyalar",
        }}
      />
      <div>
        {loading ? (
          <CategoryLoadingSkeletList />
        ) : (
          categories?.results?.map((item) => {
            return (
              <div key={item.id} className="border-b-2">
                <button
                  onClick={() => {
                    categoryHandler(item.value, item.id);
                    dispatch(setActiveCategoryId(item.id));
                    dispatch(setSearchValue(""));
                  }}
                  className="flex justify-between items-center cursor-pointer p-3 hover:bg-main hover:text-white rounded-lg w-full"
                  key={item.id}
                >
                  <h1 className="font-semibold text-xl">
                    <Translate dictionary={item.name} />
                  </h1>
                  <h1 className="bg-blue-100 w-8 h-8 rounded-md flex items-center justify-center font-bold text-secondary/[0.7]">
                    {item.posts_count}
                  </h1>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Categories;
