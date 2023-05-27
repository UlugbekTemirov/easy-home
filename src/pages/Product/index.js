import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import products from "../../products.db";

import Container from "../../layout/Container";
import ProductGallery from "./components/ProductGallery";
import ProductBackground from "./components/ProductBackground";
import ProductDetails from "./components/ProductDetails";
import Product404 from "./components/Product404";
import MyModal from "../../components/MyModal";

import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../redux/product.slice";
import ShareTo from "../../components/ShareTo";
import { Helmet } from "react-helmet";

const Index = () => {
  const { slug } = useParams();
  const d = useDispatch();
  const { modal, productUrl } = useSelector((state) => state.product);
  const { lang } = useSelector((state) => state.selectLang);

  const findProduct = (slug) => {
    return products.find((product) => product.slug === slug);
  };
  const product = findProduct(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <MyModal
        className="xl:w-[600px] md:w-3/4 w-[85%]"
        opened={modal}
        close={() => d(setModal(false))}
      >
        <ShareTo link={productUrl} />
      </MyModal>
      <ProductBackground product={product} />
      <Container>
        <Helmet>
          <meta
            property="og:title"
            content={"Something Static for title also"}
          />
          <meta
            property="og:description"
            content={"something static is here"}
          />
          <meta
            property="og:image"
            content={
              "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            }
          />
        </Helmet>
        {product ? (
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[100px] gap-10 md:py-16 py-10">
            <div className="col-span-1">
              <ProductGallery images={product.images} />
            </div>
            <div className="col-span-1">
              <ProductDetails product={product} />
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
