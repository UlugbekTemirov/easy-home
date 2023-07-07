import React from "react";
import ContentLoader from "react-content-loader";

const SingleProductLoader = (props) => {
  return (
    <ContentLoader viewBox="0 0 100% 700" height="700" width="100%" {...props}>
      <rect x="0" y="15" rx="20" ry="20" width="500" height="400" />
      <rect x="70" y="425" rx="5" ry="5" width="75" height="75" />
      <rect x="160" y="425" rx="5" ry="5" width="75" height="75" />
      <rect x="250" y="425" rx="5" ry="5" width="75" height="75" />
      <rect x="550" y="71" rx="10" ry="10" width="315" height="33" />
      <rect x="550" y="17" rx="10" ry="10" width="420" height="33" />
      <rect x="550" y="125" rx="10" ry="10" width="233" height="20" />
      <rect x="550" y="216" rx="5" ry="5" width="195" height="13" />
      <rect x="550" y="251" rx="5" ry="5" width="195" height="13" />
      <rect x="550" y="311" rx="8" ry="8" width="130" height="38" />
      <rect x="600" y="311" rx="8" ry="8" width="130" height="38" />
    </ContentLoader>
  );
};

export default SingleProductLoader;
