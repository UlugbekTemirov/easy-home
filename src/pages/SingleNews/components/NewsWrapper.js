import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../../layout/Container";
import { useDispatch, useSelector } from "react-redux";
import "./NewsWrapper.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { fetchSingleNews } from "../../../redux/singleNews.slice";
import NothingFound from "../../../components/NothingFound";
import ContentLoaderSkeleton from "../../../components/ContentLoaderSkeleton";

const NewsWrapper = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { singleNews, loading, error } = useSelector(
    (state) => state.singleNews
  );

  useEffect(() => {
    dispatch(fetchSingleNews(slug));

    // eslint-disable-next-line
  }, []);

  if (error) return <div>{error}</div>;

  if (!singleNews) return <NothingFound />;

  return (
    <div className="py-10">
      <Container>
        <div className="grid md:grid-cols-10 grid-cols-1 md:gap-20 gap-5">
          <div className="md:col-span-7">
            {loading ? <ContentLoaderSkeleton /> : <Content {...singleNews} />}
          </div>

          <div className="md:col-span-3">
            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsWrapper;
