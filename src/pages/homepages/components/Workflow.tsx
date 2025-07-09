import { useMemo } from "react";
import type { IWorkflowStep } from "../homepage.type";
import { WORKFLOW_STEPS } from "../data";
import SlideInView from "../../../components/scrolls/SlideInView";
import FadeInView from "../../../components/scrolls/FadeInView";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowWidth from "../../../hooks/dom/useWindownWidth";
import { Navigation, Pagination } from "swiper/modules";
import SectionTitle from "../../../components/titles/SectionTitle";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";
import BackgroundLayoutSection from "../../../layouts/BackgroundLayoutSection";

const WorkflowItem = ({
  step,
  index,
}: {
  step: IWorkflowStep;
  index: number;
}) => {
  return (
    <div className="flex flex-col items-center px-4 pt-6 gap-y-6 group">
      <div className="relative">
        <div className="relative">
          <p className="absolute z-10 flex items-center justify-center w-10 h-10 text-xl text-white transition-transform duration-300 rounded-full bg-secondary group-hover:scale-100">
            {index + 1}
          </p>
          <span className="absolute w-[52px] h-[52px] bg-secondary/20 rounded-full z-0 top-[-6px] left-[-6px] group-hover:scale-110 transition-transform duration-300" />
          <span className="absolute w-16 h-16 bg-secondary/10 rounded-full z-0 top-[-12px] left-[-12px] group-hover:scale-125 transition-transform duration-300" />
        </div>

        <img
          src={step.imageUrl}
          alt="Step"
          className="w-[150px] h-[150px] object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <p className="text-center title-h5">{step.title}</p>
        <p className="text-center">{step.description}</p>
      </div>
    </div>
  );
};

const Workflow = () => {
  const windowWidth = useWindowWidth();
  const numberOfSlide = useMemo(() => {
    if (windowWidth < 480) return 1;
    if (windowWidth < 740) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  }, [windowWidth]);

  return (
    <BackgroundLayoutSection>
      <SlideInView className="" direction="up" triggerOnce>
        <div
          className="flex flex-col items-center justify-center"
          id={SEARCH_DATA_SECTION_ID.workflowHomepage}
        >
          <SectionTitle title="02_QUY TRÌNH" className="text-center" />
          <p className="text-center title-h1 mb-[10px]">Quy trình thực hiện</p>
        </div>
      </SlideInView>

      {windowWidth >= 720 && (
        <FadeInView delay={0.2} duration={2} className="w-full h-full">
          <div className="relative w-full py-10 bg-white mt-[50px] cursor-grab">
            <Swiper
              slidesPerView={numberOfSlide}
              modules={[Pagination, Navigation]}
              className="relative z-10 flex items-center w-full"
              navigation={true}
              grabCursor={true}
            >
              {WORKFLOW_STEPS.map((step: IWorkflowStep, index: number) => (
                <SwiperSlide key={index}>
                  <div className="">
                    <WorkflowItem step={step} index={index} key={index} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeInView>
      )}

      {windowWidth < 720 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 md:gap-4 lg:gap-6 2xl:gap-x-10 gap-y-10">
          {WORKFLOW_STEPS.map((step: IWorkflowStep, index: number) => (
            <SlideInView
              direction="up"
              triggerOnce
              className="w-full"
              delay={index * 0.1}
              key={index}
            >
              <WorkflowItem step={step} index={index} key={index} />
            </SlideInView>
          ))}
        </div>
      )}
    </BackgroundLayoutSection>
  );
};

export default Workflow;
