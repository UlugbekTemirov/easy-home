import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { newsSearchHandler } from "../utils/helpers";
import { useSelector, useDispatch } from "react-redux";

const Search = ({ setSearchValue, page, value = "" }) => {
  const [location, navigate] = [useLocation(), useNavigate()];
  const { lang } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    newsSearchHandler(search, location, navigate);
  };

  useEffect(() => {
    if (!search) return;
    dispatch(setSearchValue(search));
    // eslint-disable-next-line
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      className="flex xl:justify-center md:justify-start justify-center"
    >
      <div className="xl:w-full md:w-fit w-full bg-search md:p-8 p-4">
        <form
          onSubmit={(e) => {
            handleSearch(e);
          }}
          className="flex w-full rounded-md overflow-hidden"
        >
          <input
            id="search"
            name="search"
            className="outline-none p-[10px_20px] md:text-lg w-full font-semibold"
            type="text"
            value={value}
            placeholder="Search..."
            onChange={(e) => {
              dispatch(setSearchValue(e.target.value));
              if (e.target.value === "") {
                navigate(`/${lang}/${page}`);
              }
            }}
          />
          <label
            htmlFor="search"
            className="bg-white flex justify-center items-center px-5"
          >
            <BsSearch size={22} color="#000" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Search;
