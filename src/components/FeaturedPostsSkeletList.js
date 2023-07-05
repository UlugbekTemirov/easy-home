import React from "react";
import FeaturedPostSkelet from "./FeaturedPostSkelet";

function FeaturedPostsSkeletList({ items = 2 }) {
  let arr = [];
  for (let i = 0; i < items; i++) {
    arr.push(i);
  }

  const renderSkeleton = () => {
    return arr.map((item, index) => {
      return (
        <div key={index} className="col-span-1 mb-4">
          <FeaturedPostSkelet />
        </div>
      );
    });
  };

  return renderSkeleton();
}

export default FeaturedPostsSkeletList;
