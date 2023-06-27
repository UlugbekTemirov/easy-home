import React from "react";
import HomeSwiper from "./components/HomeSwiper";
import Services from "./components/Services";
import HomeContact from "./components/HomeContact";
import HomeProducts from "./components/HomeProducts";

const Index = () => {
  return (
    <div className="home">
      <HomeSwiper />
      <section className="sample-services">
        <Services />
      </section>
      <section className="home-contact">
        <HomeContact />
      </section>
      <section className="home-products">
        <HomeProducts />
      </section>
    </div>
  );
};

export default Index;
