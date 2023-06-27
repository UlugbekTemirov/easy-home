import React from "react";
import Container from "../../../layout/Container";
import SectionHeader from "../../../components/SectionHeader";

function HomeBlog() {
  const titleDict = {
    en: "Latest News",
    ru: "Последние новости",
    uz: "So'nggi yangiliklar",
  };

  const subtitleDict = {
    en: "See what's new in the world of smart home technology, including tips, trends, news, and more.",
    ru: "Посмотрите, что нового в мире технологий умного дома, включая советы, тенденции, новости и многое другое.",
    uz: "Aqlli uy texnologiyalarining dunyosidagi yangiliklarni, maslahatlarini, trendlarini, yangiliklarini va boshqalarini ko'ring.",
  };

  return (
    <Container>
      <div className="mt-[65px]">
        <div className="md:w-[600px] mx-auto">
          <SectionHeader
            titleDict={titleDict}
            subtitleDict={subtitleDict}
            centered={true}
          />
        </div>
      </div>
    </Container>
  );
}

export default HomeBlog;
