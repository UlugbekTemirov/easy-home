import React from "react";
import Translate from "../../../utils/Translate";
import MiniHeader from "./MiniHeader";

const Categories = () => {
  const cats = [
    {
      id: 1,
      name: {
        en: "KNX",
        ru: "KNX",
        uz: "KNX",
      },
      amount: 10,
    },
    {
      id: 2,
      name: {
        en: "Sockets",
        ru: "Розетки",
        uz: "Rozetkalar",
      },
      amount: 5,
    },
    {
      id: 3,
      name: {
        en: "Smart Things",
        ru: "Умные вещи",
        uz: "Aqlli Narsalar",
      },
      amount: 12,
    },
    {
      id: 4,
      name: {
        en: "Others",
        ru: "Другие",
        uz: "Boshqalar",
      },
      amount: 34,
    },
  ];

  return (
    <div className="mt-5">
      <MiniHeader
        title={{
          en: "Categories",
          ru: "Категории",
          uz: "Kategoriyalar",
        }}
      />
      <div>
        {cats.map(({ id, name, amount }) => {
          return (
            <div
              className="flex justify-between items-center cursor-pointer p-3 hover:bg-orange-600 hover:text-white rounded-lg w-full"
              key={id}
            >
              <h1 className="font-semibold text-xl">
                <Translate dictionary={name} />
              </h1>
              <h1 className="bg-color-search-bg w-8 h-8 rounded-md flex items-center justify-center font-bold text-secondary/[0.7]">
                {amount}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
