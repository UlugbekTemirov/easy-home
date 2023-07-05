import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "./Product";
import products from "../../../db/products.db";
import { fetchProducts } from "../../../redux/products.slice";

const ProductsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-5">
      {products.map((product, index) => {
        return <Product key={index} index={index} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
