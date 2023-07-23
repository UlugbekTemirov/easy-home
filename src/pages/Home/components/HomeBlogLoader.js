import React from "react";
import ContentLoader from "react-content-loader";

function HomeBlogLoader() {
  return (
    <div className="flex gap-5 flex-col md:flex-row">
      <ContentLoader
        className="w-full md:w-1/2 "
        height={400}
        viewBox="0 0 50% 400"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
      >
        <rect x="0" y="0" rx="16" ry="16" width="100%" height="100%" />
      </ContentLoader>
      <ContentLoader
        className="w-full md:w-1/2 "
        height={400}
        viewBox="0 0 50% 400"
        backgroundColor="#f5f5f5"
        foregroundColor="#dbdbdb"
      >
        <rect x="50" y="250" rx="14" ry="14" width="45%" height="150" />
        <rect x="400" y="250" rx="14" ry="14" width="45%" height="150" />
        <rect x="50" y="0" rx="3" ry="3" width="300" height="29" />

        <rect x="50" y="91" rx="3" ry="3" width="178" height="6" />
        <rect x="50" y="139" rx="3" ry="3" width="178" height="6" />
        <rect x="50" y="189" rx="3" ry="3" width="178" height="6" />
        <rect x="56" y="113" rx="3" ry="3" width="102" height="7" />
        <rect x="56" y="162" rx="3" ry="3" width="102" height="7" />
      </ContentLoader>
    </div>
  );
}

export default HomeBlogLoader;
