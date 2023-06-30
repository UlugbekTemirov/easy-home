import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../../redux/team.slice";

import team from "../../../db/team.db";
import { headers } from "../../../db/team.db";
import Translate from "../../../utils/Translate";
import SocialLine from "./SocialLine";

const TeamMembers = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);

  useEffect(() => {
    teamMembers.length === 0 && dispatch(fetchTeamMembers());

    //eslint-disable-next-line
  }, []);

  const team_colors = [
    "#E02424",
    "#E3A008",
    "#0E9F6E",
    "#3F83F8",
    "#9061F9",
    "#6B7280",
  ];

  return (
    <div data-aos="fade-up">
      <div className="team-header mb-10">
        <div className="header-line w-[80px] h-[2px] bg-btnPink"></div>
        <h2
          id="title"
          className="text-3xl font-bold text-[#29303B] text-[30px] leading-[42px] mt-5"
        >
          <Translate dictionary={headers.title} />
        </h2>
      </div>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1023: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {team?.map(({ full_name, position, image, socials }, index) => (
          <SwiperSlide
            style={{
              borderColor: team_colors[index],
            }}
            className={`rounded-xl rounded-b-sm border-b-[4px] bg-[#F9F9F9] overflow-hidden`}
            key={index}
          >
            <img className="w-full h-[350px]" src={image} alt="#" />
            <div className="p-5 relative">
              <h1 className="font-bold text-xl mb-3">{full_name}</h1>
              <p className="text-gray-500 text-xl">
                <Translate dictionary={position} />
              </p>
              <SocialLine
                index={index}
                colors={team_colors}
                socials={socials}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamMembers;
