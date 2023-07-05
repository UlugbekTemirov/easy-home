import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoaderSkeleton = ({ ...rest }) => (
  <ContentLoader height="400" width="100%" viewBox="0 0 100% 100%" {...rest}>
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="50" />
    <rect x="0" y="75" rx="2" ry="2" width="100%" height="550" />
  </ContentLoader>
);

export default ContentLoaderSkeleton;
