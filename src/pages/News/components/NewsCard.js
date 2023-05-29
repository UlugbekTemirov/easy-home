import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { BiShareAlt } from "react-icons/bi";

// components
import CategoryButton from "./CategoryButton";
import ShareTo from "../../../components/ShareTo";
import MyModal from "../../../components/MyModal";

const NewsCard = ({ image, id, categories, slug }) => {
  const [modal, setModal] = useState(false);

  return (
    <Fragment>
      <MyModal
        className="xl:w-[600px] md:w-3/4 w-[85%]"
        opened={modal}
        close={() => setModal(false)}
      >
        <ShareTo link={`${window.location.href}/${slug}`} />
      </MyModal>
      <Link
        to={slug}
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[500px] overflow-hidden duration-300 cursor-pointer rounded-xl shadow-xl hover:shadow-2xl"
      >
        <img className="w-full h-[320px]" src={image} alt={id} />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {categories.map((category, index) => (
                <CategoryButton key={index} category={category} />
              ))}
            </div>
            <button
              type="button"
              className="rounded-full p-2 duration-100 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                setModal(true);
              }}
            >
              <BiShareAlt size={35} color="#FF1F59" />
            </button>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default NewsCard;
