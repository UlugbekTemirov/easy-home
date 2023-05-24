import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/select_lang.slice";

const options = [
  {
    id: 1,
    name: "UZ",
  },
  {
    id: 2,
    name: "RU",
  },
  {
    id: 3,
    name: "EN",
  },
];

const SelectLang = () => {
  const { lang } = useSelector((state) => state.selectLang);
  const dispatch = useDispatch();

  return (
    <div className="relative pl-4">
      <select onChange={(e) => dispatch(setLanguage(e.target.value))}>
        {options.map(({ name, id }) => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>

      {/* <div>
        {options.map(({ name, id }) => {
          return <div key={id}>{name}</div>;
        })}
      </div> */}
    </div>
  );
};

export default SelectLang;
