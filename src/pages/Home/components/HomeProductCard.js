import React from "react";
import GradientBorderElementOnHover from "../../../components/GradientBorderElementOnHover";
import Translate from "../../../utils/Translate";
import Price from "../../Products/components/Price";
import LanglessRedirect from "../../../components/LanglessRedirect";

function HomeProductCard({ name, price, image, slug }) {
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="home-product">
      <GradientBorderElementOnHover>
        <LanglessRedirect to={`/products/${slug}`}>
          <div
            style={{
              backgroundImage: `url(${image}) `,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="image-box cursor-pointer h-[400px] max-h-[400px] relative pointer border-2 rounded-[10px] hover:border-transparent"
          >
            <div className="see-btn opacity-0 transition-opacity absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[35px] h-[35px] inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-0 to-secondary-0">
              <span className="icon icon-eye"></span>
            </div>
          </div>
        </LanglessRedirect>
      </GradientBorderElementOnHover>
      <LanglessRedirect to={`/products/${slug}`}>
        <p className="product-title text-center cursor-pointer hover:text-[#00c6ff] uppercase mb-3">
          <Translate dictionary={name} />
        </p>
      </LanglessRedirect>
      <p className="product-price text-[#00c6ff] font-bold mb-3">
        <Price price={price} sumClassname="text-[#00c6ff]" />
      </p>
    </div>
  );
}

export default HomeProductCard;
