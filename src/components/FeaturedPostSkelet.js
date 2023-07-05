import React from "react";
import ContentLoader from "react-content-loader";

function FeaturedPostSkelet(props) {
  return (
    <ContentLoader
      height={105}
      width={450}
      viewBox="0 0 425 105"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="40" cy="55" r="40" />
      <rect x="100" y="35" rx="3" ry="3" width="350" height="13" />
      <rect x="100" y="50" rx="3" ry="3" width="10" height="10" />
      <rect x="100" y="50" rx="3" ry="3" width="150" height="10" />
      <rect x="0" y="102" rx="0" ry="0" width="425" height="1" />
    </ContentLoader>
  );
}

export default FeaturedPostSkelet;
