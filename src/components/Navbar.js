import React, { useState } from "react";

// layout
import Container from "../layout/Container";

// react-router-dom
import { Link } from "react-router-dom";

//translate
import Translate from "../utils/Translate";

// components
import SelectLang from "./SelectLang";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./Hamburger";
import Logo from "./Logo";

const links = [
  {
    id: 2,
    name: {
      uz: "Biz haqimizda",
      ru: "О нас",
      en: "About us",
    },
    path: "/about",
  },
  {
    id: 3,
    name: {
      uz: "Mahsulotlar",
      ru: "Продукты",
      en: "Products",
    },
    path: "/products",
  },
  {
    id: 4,
    name: {
      uz: "Xizmatlar",
      ru: "Услуги",
      en: "Services",
    },
    path: "/services",
  },
  {
    id: 5,
    name: {
      uz: "Yangiliklar",
      ru: "Новости",
      en: "News",
    },
    path: "/news",
  },
  {
    id: 6,
    name: {
      uz: "Aloqa",
      ru: "Контакт",
      en: "Contact",
    },
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const close = () => {
    setNavbar(false);
  };

  return (
    <div>
      <MobileMenu close={close} routes={links} open={navbar} />
      <nav className="bg-white shadow-md py-4 fixed top-0 w-full">
        <Container>
          <div className="flex justify-between items-center">
            <Logo />
            <HamburgerButton
              open={navbar}
              dark={true}
              onClick={() => setNavbar((prev) => !prev)}
            />
            <div className="md:flex items-center hidden">
              <div className="flex items-center gap-7">
                {links.map(({ id, path, name }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={close}
                    className="text-primary text-[16px] font-bold uppercase"
                  >
                    <Translate dictionary={name} />
                  </Link>
                ))}
              </div>
              <SelectLang />
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
