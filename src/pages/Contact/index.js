import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{ uz: "Bog'lanish", ru: "Контакт", en: "Contact" }}
        image="https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?s=612x612&w=0&k=20&c=HK-XWrrf6kuezCVb_hvSE1fWu-vpsqoCDb30En5H8y8="
      />
      <Container>
        <main className="py-10 contact-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div
              data-aos="fade-right"
              data-aos-delay="10"
              className="h-[500px] col-span-1"
              id="map"
            >
              <Map />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-left"
              data-aos-delay="10"
            >
              <ContactForm />
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Index;
