import React from "react";
import BgCover from "../../components/BgCover";
import NewsWrapper from "./components/NewsWrapper";

const Index = () => {
  return (
    <div>
      <BgCover
        image={
          "https://img.freepik.com/free-vector/3d-illustration-green-empty-shelfs-green-wall-minimal-background-design-product-presentation_173207-1909.jpg"
        }
        title={{
          uz: "Batafsil ma'lumot",
          en: "More information",
          ru: "Подробная информация",
        }}
      />
      <NewsWrapper />
    </div>
  );
};

export default Index;
