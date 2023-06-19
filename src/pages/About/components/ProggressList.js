import React from "react";
import Progress from "../../../components/Progress";
import Translate from "../../../utils/Translate";

function ProggressList() {
  const progresses = [
    {
      label: {
        en: "Quality products",
        ru: "Качественные продукты",
        uz: "Sifatli mahsulotlar",
      },
      value: 100,
      color: "#01BCA7",
    },
    {
      label: {
        en: "Expert guidance",
        ru: "Экспертное руководство",
        uz: "Mutaxassis yordam",
      },
      value: 90,
      color: "#FCCB54",
    },
    {
      label: {
        en: "Customer satisfaction",
        ru: "Удовлетворенность клиентов",
        uz: "Mijozlarning qondirishlari",
      },
      value: 90,
      color: "#8DD17E",
    },
  ];

  const renderProgresses = () => {
    return progresses.map((progress, index) => {
      return (
        <div className="progress-item" key={index}>
          <div className="progress-item__label text-[#29303B] font-[600] leading-[2.3em]">
            <Translate dictionary={progress.label} />
          </div>
          <Progress color={progress.color} max={100} value={progress.value} />
        </div>
      );
    });
  };

  return (
    <div className="progress-list flex flex-col gap-1">
      {renderProgresses()}
    </div>
  );
}

export default ProggressList;
