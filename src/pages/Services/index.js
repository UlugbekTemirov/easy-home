import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ uz: "Xizmatlar", ru: "Услуги", en: "Services" }}
        image="https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg"
      />
      <Container>
        <h1>Services</h1>
      </Container>
    </div>
  );
};

export default Index;
