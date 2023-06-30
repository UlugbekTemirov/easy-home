import React, { useEffect } from "react";
import { news } from "../../../db/news.db";
import NewsCard from "./NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../../../redux/news.slice";

const NewsList = () => {
  const { loading, error } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  // if (news || news?.results.length === 0) {
  //   return <h1>Not found...</h1>;
  // }

  return (
    <div className="grid xl:grid-cols-2 gap-10">
      {news?.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsList;
