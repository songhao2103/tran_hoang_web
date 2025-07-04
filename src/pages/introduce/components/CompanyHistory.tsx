import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { COMPANY_HISTORIES_DATA } from "../data";
import type { ICompanyHistoryItem } from "../introduce.type";
import { Pagination } from "swiper/modules";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";
import FadeInView from "../../../components/scrolls/FadeInView";
import TruncateTextWithPopup from "../../../components/handle-text/TruncateTextWithPopup";

const CompanyHistory = () => {
  const windowWidth = useWindowWidth();
  const numberOfSlide = useMemo(() => {
    if (windowWidth < 480) return 1;
    if (windowWidth < 740) return 1;
    if (windowWidth < 1024) return 3;
    return 4;
  }, [windowWidth]);

  return (
    <FadeInView delay={0.6} duration={2} className="w-full h-full">
      <div className="relative w-full py-10 mt-10 bg-white">
        <p className="mb-10 text-center title-h1">Lịch sử công ty</p>
        <div className="relative w-full bg-white">
          <Swiper
            slidesPerView={numberOfSlide}
            grabCursor={true}
            modules={[Pagination]}
            className="flex items-center w-full"
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
      </div>
    </FadeInView>
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
  const windowWidth = useWindowWidth();
  return (
    <div
      className={`max-w-[400px] h-[500px] mx-auto flex active:cursor-grabbing cursor-grab ${
        index % 2 === 0 ? "flex-col" : "flex-col-reverse"
      } items-center p-4 justify-between`}
    >
      <div className="h-[200px] flex justify-center flex-col items-center gap-y-2">
        <p className="title-h3">{history.year}</p>
        <p className="title-h4 text-center !text-secondary">{history.title}</p>
        <TruncateTextWithPopup
          placement={index % 2 == 0 ? "bottom" : "top"}
          trigger={windowWidth > 720 ? "hover" : "click"}
        >
          <p className="mt-2 text-sm text-center">{history.description}</p>
        </TruncateTextWithPopup>
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`h-[50px] w-[1px] bg-gray-400 ${
            index % 2 == 0 ? "bg-transparent" : ""
          }`}
        ></div>
        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
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
