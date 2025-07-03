import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { COMPANY_HISTORIES_DATA } from "../data";
import type { ICompanyHistoryItem } from "../introduce.type";
import { Pagination } from "swiper/modules";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";

const CompanyHistory = () => {
  const windowWidth = useWindowWidth();
  const numberOfSlide = useMemo(() => {
    if (windowWidth < 480) return 1;
    if (windowWidth < 740) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  }, [windowWidth]);
  return (
    <div className="w-full py-10 bg-white relative">
      <Swiper
        slidesPerView={numberOfSlide}
        modules={[Pagination]}
        className="w-full flex items-center"
      >
        {COMPANY_HISTORIES_DATA.map(
          (history: ICompanyHistoryItem, index: number) => (
            <SwiperSlide key={index}>
              <HistoryCard history={history} index={index} />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="h-1 w-full bg-gray-400 absolute top-[50%] -translate-y-1/2"></div>
    </div>
  );
};

export default CompanyHistory;

const HistoryCard = ({
  history,
  index,
}: {
  history: ICompanyHistoryItem;
  index: number;
}) => {
  return (
    <div
      className={`max-w-[400px] h-[500px] mx-auto flex ${
        index % 2 === 0 ? "flex-col" : "flex-col-reverse"
      } items-center p-4 justify-between`}
    >
      <div className="h-[200px] flex justify-center flex-col items-center gap-y-2">
        <p className="title-h3">{history.year}</p>
        <p className="title-h4 text-center !text-secondary">{history.title}</p>
        <p className="text-center text-sm mt-2">{history.description}</p>
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`h-[50px] w-[1px] bg-gray-400 ${
            index % 2 == 0 ? "bg-transparent" : ""
          }`}
        ></div>
        <div className="h-5 w-5 rounded-full bg-gray-400"></div>
        <div
          className={`h-[50px] w-[1px] bg-gray-400 ${
            index % 2 == 1 ? "bg-transparent" : ""
          }`}
        ></div>
      </div>

      <div></div>
      <div className="h-[200px]">
        <img
          src={history.image}
          alt={history.title}
          className="w-[220px] h-[150px] object-cover mt-4 "
        />
      </div>
    </div>
  );
};
