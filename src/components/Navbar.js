import React, { useEffect, useState } from "react";
import { solutionsList } from "../db/solutions.db";

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

// redux
import { useSelector, useDispatch } from "react-redux";
import { setNavbarHidden } from "../redux/navbar.slice";
import SolutionsNavBnt from "./SolutionsNavBnt";
import ServicesNavBtn from "./ServicesNavBtn";

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
  const [top, setTop] = useState(0);
  const [downScroll, setDownScroll] = useState(false);

  const dispatch = useDispatch();

  const close = () => {
    setNavbar(false);
  };
  const { lang } = useSelector((state) => state.navbar);

  useEffect(() => {
    const handleScroll = () => {
      const a = window.pageYOffset;
      setTop(a);
      if (a > top) {
        setDownScroll(true);
        dispatch(setNavbarHidden(true));
      } else {
        setDownScroll(false);
        dispatch(setNavbarHidden(false));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  return (
    <div>
      <MobileMenu close={close} routes={links} open={navbar} />
      <nav
        style={{
          backdropFilter: `${top < 50 ? "blur(0px)" : "blur(5px)"}`,
        }}
        className={`${
          top > 50 ? "bg-white/[0.8] shadow-2xl" : "bg-transparent"
        } duration-500 flex items-center fixed rounded-b-[0px] ${
          downScroll ? "-top-[80px] shadow-none" : "top-0"
        } w-full z-[200]`}
      >
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
                <SolutionsNavBnt
                  top={top}
                  content={
                    <div className="flex flex-col gap-1">
                      {solutionsList.map(({ id, name, slug }) => (
                        <Link
                          key={id}
                          className="text-[#7a7777] hover:text-primary duration-200 px-2 border-b border-black"
                          onClick={close}
                          to={`${lang}/solutions/${slug}`}
                        >
                          <Translate dictionary={name} />
                        </Link>
                      ))}
                    </div>
                  }
                />
                <ServicesNavBtn />
                {links.map(({ id, path, name }) => (
                  <Link
                    key={id}
                    to={`${lang}${path}`}
                    onClick={close}
                    className={` ${
                      top > 50 ? "text-primary" : "text-white"
                    } border border-transparent text-[16px] font-bold uppercase py-[5px] hover:border-b-main duration-200`}
                  >
                    <Translate dictionary={name} />
                  </Link>
                ))}

                <SelectLang />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
