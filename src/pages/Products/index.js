import React from "react";

// layout
import Container from "../../layout/Container";
import BgCover from "../../components/BgCover";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ en: "Products", ru: "Продукты", uz: "Mahsulotlar" }}
        image="https://blog.crobox.com/hubfs/Blog%20Post%20Photos/online%20shopping%20cover%20photo.jpg"
      />
      <Container>
        <h1>Products</h1>
      </Container>
    </div>
  );
};

export default Index;
