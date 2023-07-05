import React from "react";
import ContentLoader from "react-content-loader";

function CategoryLoadingSkelet(props) {
  return (
    <ContentLoader viewBox="0 0 400 65" height={50} width={400} {...props}>
      <rect height="10" rx="1" ry="1" width="340" x="10" y="0" />
      <rect height="10" rx="1" ry="1" width="340" x="10" y="15" />
      <circle cx="388" cy="12" r="12" />
    </ContentLoader>
  );
}

export default CategoryLoadingSkelet;
