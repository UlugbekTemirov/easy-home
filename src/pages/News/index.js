import React from "react";
import BgCover from "../../components/BgCover";
import Sidebar from "./components/Sidebar";
import NewsList from "./components/NewsList";
import PageImage from "../../components/PageImage";
import { BASE_URL } from "../../config";
import { useSelector } from "react-redux";
const Index = () => {
  const { pageImage } = useSelector((state) => state.pageImage);

  return (
    <div>
      <PageImage />
      <BgCover
        title={{
          uz: "Yangiliklar",
          ru: "Новости",
          en: "News",
        }}
        image={`${
          pageImage?.news
            ? BASE_URL + pageImage?.news
            : "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"
        }`}
      />
      <main className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-10 grid-cols-1 gap-10">
            <div className="xl:col-span-7 md:col-span-6">
              <NewsList />
            </div>
            <div className="xl:col-span-3 md:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
