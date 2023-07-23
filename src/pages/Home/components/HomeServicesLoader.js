import React from "react";
import ContentLoader from "react-content-loader";

function HomeServicesLoader({ items = 3 }) {
  let itemsArray = [];
  for (let i = 0; i < items; i++) {
    itemsArray.push(i);
  }

  const renderLoader = () => {
    return itemsArray.map((item) => {
      return (
        <ContentLoader
          className="col-span-1"
          speed={2}
          width="100%"
          height={300}
          viewBox="0 0 100% 300"
          backgroundColor="#f3f3f399"
          foregroundColor="#ecebeb99"
        >
          {/* Rectangle */}
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="300" />
        </ContentLoader>
      );
    });
  };

  return renderLoader();
}

export default HomeServicesLoader;
