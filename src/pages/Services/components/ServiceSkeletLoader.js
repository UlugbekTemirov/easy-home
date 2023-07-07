import React from "react";
import ContentLoader from "react-content-loader";

function ServiceSkeletLoader({ items = 2 }) {
  const renderItems = () => {
    let itemsArray = [];
    for (let i = 0; i < items; i++) {
      itemsArray.push(i);
    }
    return itemsArray.map(() => {
      return (
        <ContentLoader
          viewBox="0 0 100% 400"
          width="100%"
          className="mb-5 md:mb-10"
          height={300}
          title="Loading services..."
        >
          <rect x="42.84" y="9.93" rx="5" ry="5" width="50%" height="400" />
          <rect x="60%" y="30" rx="0" ry="0" width="35%" height="25.12" />
          <rect x="60%" y="80" rx="0" ry="0" width="30%" height="18" />
        </ContentLoader>
      );
    });
  };

  return renderItems();
}

export default ServiceSkeletLoader;
