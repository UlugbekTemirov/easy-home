import React, { useEffect } from "react";
import MiniHeader from "../../../components/MiniHeader";
import Translate from "../../../utils/Translate";
import DateFormatter from "../../../utils/DateFormatter";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFeaturedNews } from "../../../redux/featuredNews.slice";
import FeaturedPostsSkeletList from "../../../components/FeaturedPostsSkeletList";

const Post = ({ title, image, updated_at, slug }) => {
  return (
    <Link
      to={slug}
      className="grid grid-cols-8 w-full py-5 border-b-2 gap-3 cursor-pointer post"
    >
      <div className="col-span-2 flex items-center justify-center">
        <div className="rounded-full w-[80px] h-[80px] overflow-hidden">
          <img className="w-full h-full" src={image} alt={title.en} />
        </div>
      </div>
      <div className="col-span-6 flex items-center">
        <div>
          <p className="text-[20px] font-semibold text-secondary post-text">
            <Translate dictionary={title} />
          </p>
          <p className="text-gray-600 font-semibold">
            <DateFormatter date={updated_at} />
          </p>
        </div>
      </div>
    </Link>
  );
};

const FeaturedPosts = () => {
  const dispatch = useDispatch();
  const { featuredNews, loading, error } = useSelector(
    (state) => state.featuredNews
  );

  useEffect(() => {
    dispatch(fetchFeaturedNews());

    // eslint-disable-next-line
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (featuredNews.results && featuredNews?.results.length <= 0) {
    return <h1>Nothing found</h1>;
  }

  return (
    <div className="mt-5">
      <MiniHeader
        title={{
          en: "Featured Posts",
          ru: "Рекомендуемые Новости",
          uz: "Maxsus Yangiliklar",
        }}
      />
      <div className="flex flex-col items-center justify-center">
        {loading ? (
          <FeaturedPostsSkeletList items={1} />
        ) : (
          featuredNews?.results?.map((post, index) => {
            return <Post key={index} {...post} />;
          })
        )}
      </div>
    </div>
  );
};

export default FeaturedPosts;
