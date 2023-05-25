import React from "react";
import Product from "./Product";

const ProductsList = () => {
  const products = [
    {
      id: 1,
      title: {
        en: "Product 1",
        ru: "Продукт 1",
        uz: "Mahsulot 1",
      },
      price: [
        {
          currency: "uzs",
          amount: 1000,
        },
        {
          currency: "usd",
          amount: 1,
        },
      ],
      description: "Product 1 description",
      image: "https://picsum.photos/200/200",
      slug: "product-1",
    },
    {
      id: 2,
      title: {
        en: "Product 2",
        ru: "Продукт 2",
        uz: "Mahsulot 2",
      },
      price: [
        {
          currency: "uzs",
          amount: 2000,
        },
        {
          currency: "usd",
          amount: 2,
        },
      ],
      description: "Product 2 description",
      image: "https://picsum.photos/200/200",
      slug: "product-2",
    },
    {
      id: 3,
      title: {
        en: "Product 3",
        ru: "Продукт 3",
        uz: "Mahsulot 3",
      },
      price: [
        {
          currency: "uzs",
          amount: 3000,
        },
        {
          currency: "usd",
          amount: 3,
        },
      ],
      description: "Product 3 description",
      image: "https://picsum.photos/200/200",
      slug: "product-3",
    },
    {
      id: 4,
      title: {
        en: "Product 4",
        ru: "Продукт 4",
        uz: "Mahsulot 4",
      },
      price: [
        {
          currency: "uzs",
          amount: 4000,
        },
        {
          currency: "usd",
          amount: 4,
        },
      ],
      description: "Product 4 description",
      image: "https://picsum.photos/200/200",
      slug: "product-4",
    },
    {
      id: 5,
      title: {
        en: "Product 5",
        ru: "Продукт 5",
        uz: "Mahsulot 5",
      },
      price: [
        {
          currency: "uzs",
          amount: 5000,
        },
        {
          currency: "usd",
          amount: 5,
        },
      ],
      description: "Product 5 description",
      image: "https://picsum.photos/200/200",
      slug: "product-5",
    },
  ];

  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-5">
      {products.map((product, index) => {
        return <Product key={index} index={index} {...product} />;
      })}
    </div>
  );
};

export default ProductsList;
