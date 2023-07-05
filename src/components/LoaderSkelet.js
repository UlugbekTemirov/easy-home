import React from "react";
import ContentLoader from "react-content-loader";

const LoaderSkelet = (props) => (
  <ContentLoader
    height={350}
    viewBox="0 0 500 350"
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <rect x="43" y="320" rx="4" ry="4" width="271" height="9" />
    <rect x="44" y="340" rx="3" ry="3" width="119" height="6" />
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="300" />
  </ContentLoader>
);

export default LoaderSkelet;
