import React from "react";
import ContentLoader from "react-content-loader";

function HomeProductsLoader() {
  return (
    <ContentLoader
      width="100%"
      height={400}
      viewBox="0 0 100% 400"
      backgroundColor="#f0f0f099"
      foregroundColor="#dedede99"
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="350" />
      <rect x="100" y="370" rx="3" ry="3" width="119" height="10" />
    </ContentLoader>
  );
}

export default HomeProductsLoader;
