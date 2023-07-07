import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//components
import MiniHeader from "../../../components/MiniHeader";
import CategoryLoadingSkeletList from "../../../components/CategoryLoadingSkeletList";
import Translate from "../../../utils/Translate";
import NothingFound from "../../../components/NothingFound";

//import functions
import {
  fetchProductsCategories,
  setActiveCategory,
  setSearchValue,
} from "../../../redux/productsCategories.slice";
import classNames from "classnames";

function ProductCategories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsCategories, loading, error, activeCategory } = useSelector(
    (state) => state.productsCategories
  );
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchProductsCategories());
    // eslint-disable-next-line
  }, []);

  const categoryHandler = (slug) => {
    if (slug === "all") return navigate(`/${lang}/products`);
    else navigate(`?category=${slug}`);
  };

  if (error) return <h1>Error</h1>;

  if (productsCategories.results && productsCategories.results.length === 0) {
    return <NothingFound />;
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
          productsCategories?.results?.map((item) => {
            const btnClassname = classNames(
              "flex justify-between items-center cursor-pointer p-3 hover:bg-main hover:text-white rounded-lg w-full",
              {
                "bg-main text-white": activeCategory === item.slug,
              }
            );

            return (
              <div key={item.id} className="border-b-2">
                <button
                  onClick={() => {
                    categoryHandler(item.slug);
                    dispatch(setActiveCategory(item.slug));
                    dispatch(setSearchValue(""));
                  }}
                  className={btnClassname}
                  key={item.id}
                >
                  <h1 className="font-semibold text-xl">
                    <Translate dictionary={item.name} />
                  </h1>
                  <h1 className="bg-blue-100 w-8 h-8 rounded-md flex items-center justify-center font-bold text-secondary/[0.7]">
                    {item.products_count}
                  </h1>
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ProductCategories;
