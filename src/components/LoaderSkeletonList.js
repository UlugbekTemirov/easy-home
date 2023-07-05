import React from "react";
import LoaderSkelet from "./LoaderSkelet";

function LoaderSkeletonList({ items = 4 }) {
  let arr = [];
  for (let i = 0; i < items; i++) {
    arr.push(i);
  }

  const renderSkeleton = () => {
    return arr.map((item, index) => {
      return (
        <div key={index} className="col-span-1">
          <LoaderSkelet />
        </div>
      );
    });
  };

  return renderSkeleton();
}

export default LoaderSkeletonList;
