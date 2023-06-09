import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

// components
import CategoryButton from "./CategoryButton";
import ShareTo from "../../../components/ShareTo";
import MyModal from "../../../components/MyModal";
import ShareButton from "./ShareButton";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";

const NewsCard = ({
  image,
  id,
  category,
  slug,
  title,
  updated_at,
  description,
}) => {
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
        className="w-full h-full overflow-hidden duration-300 cursor-pointer rounded-xl shadow-xl hover:shadow-2xl"
      >
        <img className="w-full h-[300px]" src={image} alt={id} />
        <div className="p-5 h-[calc(100%-300px)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {category?.map((category, idx) => (
                <CategoryButton index={idx} key={idx} category={category} />
              ))}
            </div>
            <ShareButton
              onClick={(e) => {
                e.preventDefault();
                setModal(true);
              }}
            />
          </div>
          <div className="pt-3 flex flex-col justify-between h-[calc(100%-45px)]">
            <div>
              <h1 className="text-primary font-semibold text-[22px] max-h-[70px] overflow-hidden text-clip">
                <Translate dictionary={title} />
              </h1>
              <p className="truncate mt-2 text-secondary/[0.9] text-lg">
                <Translate dictionary={description} />
              </p>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                className="text-main duration-200 text-xl font-bold"
              >
                Read more
              </button>
              <p className="text-gray-500 flex items-center">
                <DateFormatter date={updated_at} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default NewsCard;
