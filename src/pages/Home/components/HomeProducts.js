import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import HomeProductCategories from "./HomeProductCategories";
import Container from "../../../layout/Container";
import HomeProductsList from "./HomeProductsList";

function HomeProducts() {
  const titleDict = {
    en: "SmartHome Products",
    ru: "Умные продукты для дома",
    uz: "Aqlli uy mahsulotlari",
  };

  const subtitleDict = {
    en: "Make your home a little more livable—and a lot more automated—by adding appliances and devices you can control from anywhere.",
    ru: "Сделайте свой дом немного более жилым - и намного более автоматизированным - добавив бытовую технику и устройства, которыми вы можете управлять из любого места.",
    uz: "Uyingizni yashashga yordam beradigan jihozlar va qurilmalarni qo'shib, istalgan joydan boshqaring.",
  };

  return (
    <Container>
      <div className="mt-[65px]">
        <div className="md:w-[600px] mx-auto">
          <SectionHeader
            titleDict={titleDict}
            subtitleDict={subtitleDict}
            centered={true}
          />
        </div>
        <HomeProductCategories />
        <HomeProductsList />
      </div>
    </Container>
  );
}

export default HomeProducts;
