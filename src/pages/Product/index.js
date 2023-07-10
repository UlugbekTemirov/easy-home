import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import products from "../../db/products.db";

import Container from "../../layout/Container";

// components
import ProductGallery from "./components/ProductGallery";
import ProductBackground from "./components/ProductBackground";
import ProductDetails from "./components/ProductDetails";
import Product404 from "./components/Product404";
import MyModal from "../../components/MyModal";
import ShareTo from "../../components/ShareTo";

import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/product.slice";
import { fetchSingleProduct } from "../../redux/singleProducts.slice";
import SingleProductLoader from "./components/SingleProductLoader";

const Index = () => {
  const { slug } = useParams();
  const d = useDispatch();
  const { modal, productUrl } = useSelector((state) => state.product);
  const { singleProduct, loading, error } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    d(fetchSingleProduct(slug));

    // eslint-disable-next-line
  }, []);

  const loadingProduct = {
    title: {
      en: "Loading...",
      ru: "Загрузка...",
      uz: "Yuklanmoqda...",
    },
  };
  const errorProduct = {
    title: {
      en: "Error...",
      ru: "Ошибка...",
      uz: "Xatolik...",
    },
  };

  if (error) return <h1>Error...</h1>;
  if (!singleProduct.id && !loading) return <h1>Not found...</h1>;

  return (
    <div className="">
      <MyModal
        className="xl:w-[600px] md:w-3/4 w-[85%]"
        opened={modal}
        close={() => d(setModal(false))}
      >
        <ShareTo link={productUrl} />
      </MyModal>
      <ProductBackground
        product={
          loading ? loadingProduct : error ? errorProduct : singleProduct
        }
      />
      <Container>
        {loading ? (
          <SingleProductLoader />
        ) : singleProduct.id ? (
          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[100px] md:gap-[30px] gap-10 md:py-16 py-10">
            <div className="col-span-1">
              <ProductGallery images={singleProduct.slider_images} />
            </div>
            <div className="col-span-1">
              <ProductDetails product={singleProduct} />
            </div>
          </div>
        ) : (
          <Product404 />
        )}
      </Container>
    </div>
  );
};

export default Index;
