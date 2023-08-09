import React, { useEffect } from "react";
import { singleSolutionWithContent } from "../../db/solutions.db";

// import function
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSolution } from "../../redux/singleSolution.slice";

//import components
import BgCover from "../../components/BgCover";
import SolutionServices from "./components/SolutionServices";
import Translate from "../../utils/Translate";
import EventsLoader from "./components/EventsLoader";
import SingleProductLoader from "../Product/components/SingleProductLoader";

function Index() {
  const { lang } = useSelector((state) => state.navbar);
  const { solution, loading, error } = useSelector(
    (state) => state.singleSolution
  );
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(fetchSolution(slug));

    //eslint-disable-next-line
  }, [slug]);

  const handleHeader = (lang, dict) => {
    const translatedText =
      lang === "uz"
        ? `${dict[lang]}ni avtomatlashtirish`
        : lang === "ru"
        ? `Автоматизация ${dict[lang]}`
        : lang === "en"
        ? `Automate ${dict[lang]}`
        : "";
    return translatedText;
  };

  // if (loading) return;
  // if (!solution.id)
  //   return (
  //     <h1>
  //       <Translate
  //         dictionary={{
  //           uz: "Ma'lumot topilmadi",
  //           ru: "Информация не найдена",
  //           en: "Information not found",
  //         }}
  //       />
  //     </h1>
  //   );

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

  if (error) return <h1>Error</h1>;

  return (
    <div>
      <BgCover
        image={
          loading
            ? "loading"
            : solution?.image
            ? solution?.image
            : "Ma'lumot topilmadi"
        }
        title={
          loading
            ? loadingProduct
            : solution?.name
            ? solution?.name
            : errorProduct
        }
      />
      <div className="max-w-[720px] lg:max-w-[960px] xl:max-w-[1300px] w-full px-[12px] mx-auto">
        {loading ? (
          <EventsLoader />
        ) : (
          <div className="pt-16">
            <h1 className="uppercase text-[1.6rem] md:text-[2rem] mb-10">
              {handleHeader(lang, solution?.name)}
            </h1>
            <SolutionServices services={solution?.services} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
