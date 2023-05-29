import React from "react";
import BgCover from "../../components/BgCover";
import Sidebar from "./components/Sidebar";
import NewsList from "./components/NewsList";

const Index = () => {
  return (
    <div>
      <BgCover
        title={{
          uz: "Yangiliklar",
          ru: "Новости",
          en: "News",
        }}
        image="https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"
      />
      <main className="py-10">
        <div className="container">
          <div className="grid md:grid-cols-10 grid-cols-1 gap-10">
            <div className="md:col-span-7">
              <NewsList />
            </div>
            <div className="md:col-span-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
