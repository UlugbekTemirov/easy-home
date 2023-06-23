import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import services from "../../db/service.db";
import ServiceCard from "./components/ServiceCard";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ uz: "Xizmatlar", ru: "Услуги", en: "Services" }}
        image="https://www.kingstowncollege.ie/wp-content/uploads/2022/03/team-development-plan.jpeg"
      />
      <Container>
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Index;

// className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5"
