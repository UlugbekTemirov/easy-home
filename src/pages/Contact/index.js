import React from "react";
import BgCover from "../../components/BgCover";
import Container from "../../layout/Container";
import Map from "./components/Map";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactFooter from "./components/ContactFooter";
import PageImage from "../../components/PageImage";
import { BASE_URL } from "../../config";
import { useSelector } from "react-redux";

const Index = () => {
  const { pageImage } = useSelector((state) => state.pageImage);

  return (
    <div>
      <PageImage />
      <BgCover
        title={{ uz: "Bog'lanish", ru: "Контакт", en: "Contact" }}
        image={`${
          pageImage?.contact
            ? BASE_URL + pageImage?.contact
            : "https://media.istockphoto.com/id/1141639313/photo/contact-us-woman-hand-holding-icon-customer-support-concept-copy-space.jpg?s=612x612&w=0&k=20&c=HK-XWrrf6kuezCVb_hvSE1fWu-vpsqoCDb30En5H8y8="
        }`}
      />
      <Container>
        <main className="py-[80px] contact-main">
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
          <div className="contact-list" data-aos="fade-up" data-aos-delay="10">
            <ContactList />
          </div>
        </main>
      </Container>
      <div className="contact-footer" data-aos="fade-up" data-aos-delay="10">
        <ContactFooter />
      </div>
    </div>
  );
};

export default Index;
