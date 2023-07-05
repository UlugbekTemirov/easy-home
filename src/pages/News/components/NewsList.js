import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews, fetchNewsByCategoryId } from "../../../redux/news.slice";
import { useSearchParams } from "react-router-dom";
import LoaderSkeletonList from "../../../components/LoaderSkeletonList";
import NothingFound from "../../../components/NothingFound";
import { setActiveCategoryId } from "../../../redux/newsCategories.slice";

const NewsList = () => {
  const { news, loading, error } = useSelector((state) => state.news);
  const [searchParams] = useSearchParams();
  const { activeCategoryId } = useSelector((state) => state.newsCategories);
  const dispatch = useDispatch();

  const id = searchParams.get("id");
  const search = searchParams.get("search");

  useEffect(() => {
    if (!id) return;
    dispatch(setActiveCategoryId(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!search) return;

    dispatch(fetchNews({ search: search }));
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (search) {
      return;
    }

    if (activeCategoryId === "all") {
      dispatch(fetchNews({ page_size: 10, page: 1 }));
      return;
    }
    dispatch(fetchNewsByCategoryId(activeCategoryId));
    // eslint-disable-next-line
  }, [activeCategoryId]);

  if (error) {
    return <h1>Error...</h1>;
  }

  if (news.results && news?.results.length === 0) {
    return <NothingFound />;
  }

  return (
    <div className="grid xl:grid-cols-2 gap-10">
      {loading ? (
        <LoaderSkeletonList />
      ) : (
        news?.results?.map((item, index) => <NewsCard key={index} {...item} />)
      )}
    </div>
  );
};

export default NewsList;
