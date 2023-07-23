import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import AboutIntro from "./components/AboutIntro";
import Works from "./components/Works";
import TeamMembers from "./components/TeamMembers";
import PageImage from "../../components/PageImage";
import { BASE_URL } from "../../config";
import { useSelector } from "react-redux";

const Index = () => {
  const { pageImage } = useSelector((state) => state.pageImage);
  return (
    <div>
      <PageImage />
      <BgCover
        data-aos="fade-up"
        title={{
          uz: "Biz haqimizda",
          ru: "О Hас",
          en: "About Us",
        }}
        image={`${
          pageImage?.about_page_image
            ? BASE_URL + pageImage?.about_page_image
            : "https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?b=1&s=170667a&w=0&k=20&c=2sJEN1Hhg6heUi1ZxKs6pJDwcyLYXPc4pUGd3hEjOjE="
        }`}
      />
      <Container>
        <main className="py-16">
          <AboutIntro />
        </main>
        <div className="about-works">
          <Works />
        </div>
        <div className="team py-16">
          <TeamMembers />
        </div>
      </Container>
    </div>
  );
};

export default Index;
