import React from "react";
import ContentLoader from "react-content-loader";

const SingleProductLoader = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-10">
      <ContentLoader
        viewBox="0 0 100% 500"
        height="500"
        width="100%"
        {...props}
      >
        <rect x="0" y="15" rx="20" ry="20" width="100%" height="400" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 100% 500"
        height="500"
        width="100%"
        {...props}
      >
        <rect x="0" y="71" rx="10" ry="10" width="315" height="33" />
        <rect x="0" y="17" rx="10" ry="10" width="420" height="33" />
        <rect x="0" y="125" rx="10" ry="10" width="233" height="20" />
        <rect x="0" y="216" rx="5" ry="5" width="195" height="13" />
        <rect x="0" y="251" rx="5" ry="5" width="195" height="13" />
        <rect x="0" y="311" rx="8" ry="8" width="130" height="38" />
        <rect x="50" y="311" rx="8" ry="8" width="130" height="38" />
      </ContentLoader>
    </div>
  );
};

export default SingleProductLoader;
