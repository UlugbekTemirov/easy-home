import React from "react";
import Translate from "../../../utils/Translate";
import { useSelector } from "react-redux";

const Content = ({ content, title }) => {
  const { lang } = useSelector((state) => state.navbar);

  return (
    <div>
      <h1 className="font-bold md:text-4xl text-3xl text-left mb-5">
        <Translate dictionary={title} />
      </h1>
      <div
        className="news-wrapper"
        dangerouslySetInnerHTML={{ __html: content[lang] }}
      ></div>
    </div>
  );
};

export default Content;
