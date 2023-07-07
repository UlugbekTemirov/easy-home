import React, { useRef, useState } from "react";
import MiniHeader from "../../../components/MiniHeader";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { setRange } from "../../../redux/filter.slice";
import { useDispatch } from "react-redux";
import PriceFormatter from "../../../utils/PriceFormatter";

// helpers
import { RANGE_COLOR } from "../../../utils/helpers";
import Translate from "../../../utils/Translate";

const PriceFilter = () => {
  const sliderRef = useRef(null);
  const [localRange, setLocalRange] = useState([0, 10000000]);
  const dispatch = useDispatch();

  return (
    <div className="xl:mt-10 mt-5">
      <MiniHeader
        title={{
          en: "Filter by price",
          ru: "Фильтр по цене",
          uz: "Narx bo'yicha filtrlash",
        }}
      />
      <div className="px-5 py-3">
        <Slider
          className="cursor-pointer"
          ref={sliderRef}
          trackStyle={[
            {
              backgroundColor: RANGE_COLOR,
              height: 10,
              marginTop: -3,
            },
          ]}
          min={0}
          max={10000000}
          step={50000}
          range
          handleStyle={[0, 1].map((item) => {
            return {
              borderColor: RANGE_COLOR,
              backgroundColor: RANGE_COLOR,
              opacity: 1,
              height: 20,
              width: 20,
              marginTop: -8,
              boxShadow: "none",
            };
          })}
          value={localRange}
          defaultValue={[0, 1000000]}
          onChange={(e) => {
            setLocalRange(e);
          }}
        />
        <div className="flex justify-between mt-3 text-primary">
          {[0, 1].map((item) => (
            <h1 key={item} className="font-semibold text-lg">
              <PriceFormatter amount={localRange[item]} /> so'm
            </h1>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            dispatch(setRange(localRange));
          }}
          className=" w-[200px] hover:bg-main hover:text-white py-3 border border-main transition-colors rounded-md"
        >
          <Translate
            dictionary={{
              en: "Apply",
              ru: "Применить",
              uz: "Qo'llash",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
