import React from "react";
import BgCover from "../../components/BgCover";

const Index = () => {
  return (
    <div>
      <BgCover
        image={
          "https://img.freepik.com/free-vector/3d-illustration-green-empty-shelfs-green-wall-minimal-background-design-product-presentation_173207-1909.jpg"
        }
        title={{
          en: "Lorem ipsum dolor sit amet consectetur.",
          ru: "Lorem ipsum dolor sit amet consectetur.",
          uz: "Lorem ipsum dolor sit amet consectetur.",
        }}
      />
    </div>
  );
};

export default Index;
