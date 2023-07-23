import React from "react";
import { useSelector } from "react-redux";
import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../layout/Container";
import ServicesList from "./ServicesList";
import Translate from "../../../utils/Translate";
import bgControl from "../../../assets/images/bg-contact.jpg";

//import bg-image
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config";
function Services() {
  const { lang } = useSelector((state) => state.navbar);
  const { pageImage } = useSelector((state) => state.pageImage);

  const title = {
    en: "Services we offer",
    ru: "Услуги, которые мы предлагаем",
    uz: "Biz taklif qiladigan xizmatlar",
  };
  const subtitle = {
    en: "Manage your home from anywhere easily",
    ru: "Управляйте своим домом из любого места легко",
    uz: "Uyingizni istalgan joydan oson boshqaring",
  };

  return (
    <Container>
      <div
        className="home-services mt-[100px]"
        style={{
          background: `url(${
            pageImage?.home_service
              ? BASE_URL + pageImage?.home_service
              : bgControl
          }) no-repeat bottom right`,
        }}
      >
        <SectionHeader titleDict={title} subtitleDict={subtitle} />
        <ServicesList />
        <div data-aos="fade-up" className="my-10">
          <Link
            to={`/${lang}/services`}
            className="bg-gradient-to-r p-12 md:p-20 rounded-md py-3 md:py-3 text-white from-primary-0 to-secondary-0"
          >
            <Translate
              dictionary={{
                en: "View all services",
                ru: "Посмотреть все услуги",
                uz: "Barcha xizmatlarni ko'rish",
              }}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Services;
