import React, { useEffect } from "react";
import BgCover from "../../components/BgCover";
import { useParams } from "react-router-dom";
import ServiceSlider from "./components/ServiceSlider";
import Container from "../../layout/Container";

import { useDispatch, useSelector } from "react-redux";
import { fetchSingleService } from "../../redux/singleService.slice";
import ServiceSkeletLoader from "../Services/components/ServiceSkeletLoader";

const Index = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { singleService, loading, error } = useSelector(
    (state) => state.singleService
  );
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSingleService(slug));

    // eslint-disable-next-line
  }, [slug]);

  const loadingProduct = {
    en: "Loading...",
    ru: "Загрузка...",
    uz: "Yuklanmoqda...",
  };
  const errorProduct = {
    en: "Error...",
    ru: "Ошибка...",
    uz: "Xatolik...",
  };

  if (error) return <h1>Error...</h1>;

  if (!singleService.id && !loading) {
    return "404";
  }

  return (
    <div>
      <BgCover
        image={
          "https://img.freepik.com/free-vector/3d-illustration-green-empty-shelfs-green-wall-minimal-background-design-product-presentation_173207-1909.jpg"
        }
        title={
          loading ? loadingProduct : error ? errorProduct : singleService?.name
        }
      />
      <Container>
        {loading ? (
          <ServiceSkeletLoader items={1} />
        ) : (
          <div className="py-10">
            <ServiceSlider images={singleService?.images} />

            <div
              className="service-content"
              dangerouslySetInnerHTML={{ __html: singleService?.content[lang] }}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Index;
