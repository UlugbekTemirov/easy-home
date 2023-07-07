import React from "react";
import ContentLoader from "react-content-loader";

const ProductListLoader = ({ items = 4 }) => {
  let arr = [];
  for (let i = 0; i < items; i++) {
    arr.push(i);
  }

  const renderSkeleton = () => {
    return arr.map((item, index) => {
      return (
        <ContentLoader
          viewBox="0 0 400 300"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="400" height="300" />
        </ContentLoader>
      );
    });
  };

  return renderSkeleton();
};

export default ProductListLoader;
