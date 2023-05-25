import React from "react";
import { useParams } from "react-router-dom";
import BgCover from "../../components/BgCover";
import products from "../../products.db";
import ImageGallery from "react-image-gallery";
import Container from "../../layout/Container";

const Index = () => {
  const { slug } = useParams();

  const findProduct = (slug) => {
    return products.find((product) => product.slug === slug);
  };

  const product = findProduct(slug);

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div>
      <div>
        {product ? (
          <BgCover
            title={product.title}
            image={
              "https://popupsmart.com/blog/images/o/n/l/i/n/online-shopping-153a87f7.jpg"
            }
          />
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
      <Container>
        <div className="grid grid-cols-10">
          <div className="w-full col-span-4">
            <ImageGallery
              showNav={false}
              showFullscreenButton={false}
              showPlayButton={false}
              items={images}
            />
          </div>
          <div className="col-span-6"></div>
        </div>
      </Container>
    </div>
  );
};

export default Index;
