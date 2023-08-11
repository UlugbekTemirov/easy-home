// react-router-dom
import { Link } from "react-router-dom";
import { solutionsList } from "../db/solutions.db";
import { useSelector } from "react-redux";

//translate
import Translate from "../utils/Translate";

// components
import { useEffect } from "react";
import HamburgerButton from "./Hamburger";
import Logo from "./Logo";
import SelectLang from "./SelectLang";
import SolutionsNavBnt from "./SolutionsNavBnt";
import ServicesNavBtn from "./ServicesNavBtn";

const MobileMenu = ({ open, routes, close }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div>
      <div
        onClick={close}
        className={`fixed top-0 left-0 duration-700 transition-colors h-screen overflow-hidden max-w-screen ${
          open
            ? "bg-black/[0.5] z-[450] w-full"
            : "bg-transparent w-0 overflow-hidden"
        }`}
      ></div>
      <div
        className={`bg-white rounded-l-xl flex flex-col justify-between fixed right-0 duration-500 z-[450] top-0 w-[80%] py-5 px-5 ${
          open ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }  h-screen`}
      >
        <div>
          <div
            className={`absolute top-[28px] right-2 bg-white rounded-md p-1 ${
              open ? "" : "hidden"
            }`}
          >
            <HamburgerButton onClick={close} open={open} dark={true} />
          </div>
          <div className="mb-5">
            <Logo onClick={close} />
          </div>

          <div className="flex flex-col gap-5 text-secondary">
            {routes.map(({ id, name, path }) => (
              <Link onClick={close} className="text-xl" to={path} key={id}>
                <Translate dictionary={name} />
              </Link>
            ))}
          </div>
          <SolutionsNavBnt
            close={close}
            content={<div className="flex flex-col gap-1"></div>}
          />
          <div>
            <ServicesNavBtn close={close} />
          </div>
          <div className="mt-5">
            <SelectLang />
          </div>
        </div>
        <div>
          <a href="uniweek.uz">uniweek.uz</a>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
