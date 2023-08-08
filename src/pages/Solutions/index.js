import React from "react";
import { singleSolutionWithContent } from "../../db/solutions.db";

// import function
import { useSelector } from "react-redux";

//import components
import BgCover from "../../components/BgCover";
import Container from "../../layout//Container";
import Translate from "../../utils/Translate";
import SolutionServices from "./components/SolutionServices";

function Index() {
  const { lang } = useSelector((state) => state.navbar);
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

  return (
    <div>
      <BgCover
        image={singleSolutionWithContent.pageImage}
        title={singleSolutionWithContent.name}
      />
      <div className="max-w-[720px] lg:max-w-[960px] xl:max-w-[1300px] w-full px-[12px] mx-auto">
        <div className="pt-16">
          <h1 className="uppercase text-[1.6rem] md:text-[2rem] mb-10">
            {/* <Translate dictionary={singleSolutionWithContent.name} /> */}
            {handleHeader(lang, singleSolutionWithContent.name)}
          </h1>
          <SolutionServices
            services={singleSolutionWithContent.servicesForSolution}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
