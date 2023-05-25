import React from "react";

// layout
import Container from "../../layout/Container";
import BgCover from "../../components/BgCover";
import Topbar from "./components/Topbar";
import ProductsList from "./components/ProductsList";
import Sidebar from "./components/Sidebar";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ en: "Products", ru: "Продукты", uz: "Mahsulotlar" }}
        image="https://blog.crobox.com/hubfs/Blog%20Post%20Photos/online%20shopping%20cover%20photo.jpg"
      />
      <Container>
        <div className="grid xl:grid-cols-10 grid-cols-2 py-10 gap-5">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="col-span-7">
            <Topbar />
            <ProductsList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
