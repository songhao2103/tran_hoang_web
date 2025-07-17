import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LayoutContent from "../../../layouts/LayoutContent";
import { FAKE_FEEDBACK_DATAS } from "../data";
import type { IFeedbackItem } from "../homepage.type";
import "../style/feedback.css";
import SlideInView from "../../../components/scrolls/SlideInView";
import SectionTitle from "../../../components/titles/SectionTitle";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";
import BackgroundLayoutSection from "../../../layouts/BackgroundLayoutSection";

const FeedbackItem = ({ feedback }: { feedback: IFeedbackItem }) => {
  return (
    <div className="flex pl-[50px] gap-x-10 cursor-grab active:cursor-grabbing">
      <div className="hidden sm:block">
        <img
          src={feedback.userImage}
          alt="avatar"
          className="w-[180px] h-[180px] object-cover rounded-full flex-shrink-0 min-w-[180px]"
        />
      </div>
      <div className="flex flex-col justify-between py-4 gap-y-6 ">
        <p>{feedback.content}</p>

        <div className="">
          <p className="title-h4">{feedback.userName}</p>
          <p>{feedback.note}</p>
        </div>
      </div>
    </div>
  );
};

export const Feedbacks = () => {
  return (
    <BackgroundLayoutSection>
      <LayoutContent>
        <SlideInView direction="up" triggerOnce className="w-full" delay={0.3}>
          <div
            className="flex flex-col xl:flex-row justify-between"
            id={SEARCH_DATA_SECTION_ID.feedbackHomePage}
          >
            <div className="flex flex-col items-center w-full xl:w-[40%]">
              <SectionTitle
                title="04_KHÁCH HÀNG NÓI VỀ CHÚNG TÔI"
                className="text-center xl:text-start"
              />
              <p className="title-h1 text-center w-full xl:text-start mb-[60px] xl:mb-0 ">
                Trần Hoàng logistic số một
              </p>
            </div>

            <div className="w-full xl:w-[55%]">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1} // 1 slide mỗi view
                spaceBetween={0} // sát nhau
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                speed={800}
                className="h-full overflow-hidden"
              >
                {FAKE_FEEDBACK_DATAS.map((feedback, index) => (
                  <SwiperSlide key={index}>
                    <FeedbackItem feedback={feedback} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </SlideInView>
      </LayoutContent>
    </BackgroundLayoutSection>
  );
};
