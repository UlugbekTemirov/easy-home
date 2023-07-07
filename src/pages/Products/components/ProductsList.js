import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Product from "./Product";
import Translate from "../../../utils/Translate";
import {
  fetchProducts,
  fetchProductsByCategory,
  loadMoreProducts,
} from "../../../redux/products.slice";
import ProductListLoader from "../../../components/ProductListLoader";
import {
  setActiveCategory,
  setSearchValue,
} from "../../../redux/productsCategories.slice";
import NothingFound from "../../../components/NothingFound";

const ProductsList = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { products, loading, error } = useSelector((state) => state.products);
  const { range } = useSelector((state) => state.filter);
  const search = searchParams.get("search");
  const category = searchParams.get("category");

  useEffect(() => {
    if (!search) {
      dispatch(setSearchValue(""));
    }
    if (!category) return;
    dispatch(setActiveCategory(category));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!category) {
      dispatch(
        fetchProducts({ page_size: 10, page: 1, search: search, range: range })
      );
      return;
    }
    dispatch(fetchProductsByCategory(category));
    // eslint-disable-next-line
  }, [category, search, range]);

  const handleShowMore = () => {
    dispatch(loadMoreProducts(products?.links?.next));
  };

  // if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error...</h1>;

  if (products.results && products.results.length === 0)
    return <NothingFound />;

  return (
    <>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-5">
        {loading ? (
          <ProductListLoader items="4" />
        ) : (
          products?.results?.map((product, index) => {
            return <Product key={index} index={index} {...product} />;
          })
        )}
      </div>
      {products?.results?.length > 0 && products?.links?.next ? (
        <div className="bg-gradient-to-r rounded-md from-primary-0 to-secondary-0 text-white p-1 w-full my-10 ">
          <button
            onClick={() => {
              handleShowMore();
            }}
            className="w-full py-2 bg-white text-[#0045b7] hover:bg-transparent hover:text-white transition-colors"
          >
            <Translate
              dictionary={{
                en: "Show more",
                ru: "Показать еще",
                uz: "Ko'proq ko'rish",
              }}
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProductsList;
