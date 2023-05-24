import React from "react";
import { useParams } from "react-router-dom";
import BgCover from "../../components/BgCover";

const Index = () => {
  const { slug } = useParams();

  const products = [
    {
      id: 1,
      slug: "knx-super-smart-something",
      title: {
        uz: "KNX Super Aqlli Nimadir",
        ru: "KNX Super Smart Что-то",
        en: "NX Super Smart Something",
      },
      image:
        "https://img.freepik.com/free-psd/3d-rendering-black-background-product-podium-stand-studio_1258-123102.jpg",
    },
    {
      id: 2,
      slug: "knx-super-smart-something-2",
      title: {
        uz: "KNX Super Aqlli Nimadir 2",
        ru: "KNX Super Smart Что-то 2",
        en: "NX Super Smart Something 2",
      },
      image:
        "https://img.freepik.com/free-psd/3d-rendering-black-background-product-podium-stand-studio_1258-123102.jpg",
    },
  ];

  const findProduct = (slug) => {
    return products.find((product) => product.slug === slug);
  };

  const product = findProduct(slug);

  return (
    <div>
      {product ? (
        <BgCover title={product.title} image={product.image} />
      ) : (
        <BgCover
          title={{
            uz: "Mahsulot topilmadi",
            ru: "Продукт не найден",
            en: "Product not found",
          }}
          image="https://cdn1.vectorstock.com/i/1000x1000/52/60/404-error-not-found-page-background-design-vector-20395260.jpg"
        />
      )}
    </div>
  );
};

export default Index;
