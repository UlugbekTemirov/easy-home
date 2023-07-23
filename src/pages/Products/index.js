import React from "react";

// layout
import Container from "../../layout/Container";

// components
import BgCover from "../../components/BgCover";
import Topbar from "./components/Topbar";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";
import PageImage from "../../components/PageImage";
import { BASE_URL } from "../../config";
import { useSelector } from "react-redux";

const Index = () => {
  const { pageImage } = useSelector((state) => state.pageImage);
  return (
    <div>
      <PageImage />
      <BgCover
        title={{ en: "Products", ru: "Продукты", uz: "Mahsulotlar" }}
        image={`${
          pageImage?.products
            ? BASE_URL + pageImage?.products
            : "https://blog.crobox.com/hubfs/Blog%20Post%20Photos/online%20shopping%20cover%20photo.jpg"
        }`}
      />
      <Container>
        <div className="grid xl:grid-cols-10 grid-cols-1 py-10 gap-10">
          <div className="xl:col-span-3 col-span-1">
            <Sidebar />
          </div>
          <div className="xl:col-span-7 col-span-1">
            <Topbar />
            <ProductsList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
