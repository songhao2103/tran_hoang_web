import { motion, type Variants } from "framer-motion";
import { useMemo, useState } from "react";
import type { IServiceOverviewItem } from "../homepage.type";
import SlideInView from "../../../components/scrolls/SlideInView";
import { SERVICES_OVERVIEW_DATA } from "../data";
import { SEARCH_DATA_SECTION_ID } from "../../../datas/pathSearchDatas";
import BackgroundLayoutSection from "../../../layouts/BackgroundLayoutSection";
import { useElementWidth } from "../../../hooks/dom/useElementWidth";
import SectionTitle from "../../../components/titles/SectionTitle";

const backgroundVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 1, ease: "easeOut" } },
};

const layoutVariants: Variants = {
  rest: { opacity: 0.5 },
  hover: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const iconVariants: Variants = {
  rest: { opacity: 1 },
  hover: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const contentVariants: Variants = {
  rest: { opacity: 0, y: 40 },
  hover: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const ServiceOverviewItem = ({
  serviceItem,
  index,
}: {
  serviceItem: IServiceOverviewItem;
  index: number;
}) => {
  const windowWidth = window.innerWidth;
  const [active, setActive] = useState(windowWidth > 1024 ? false : true);
  const { ref, width } = useElementWidth<HTMLDivElement>();
  const Icon = serviceItem.icon;

  const positionTitle = useMemo(() => {
    if (windowWidth < 1024) return "left-[30px] top-[70px]";
    return "left-[80px] top-[100px]";
  }, [windowWidth]);

  const positionDescription = useMemo(() => {
    // if (windowWidth < 768) return "left-[30px] top-[40px]";
    if (windowWidth < 1024) return "left-[30px] bottom-[70px]";
    return "left-[60px] bottom-[100px]";
  }, [windowWidth]);

  return (
    <SlideInView
      direction="up"
      triggerOnce
      className="w-full"
      delay={index * 0.1}
    >
      <motion.div
        className="relative w-full max-w-[500px] overflow-hidden rounded-2xl"
        style={{
          backgroundImage: `url(${serviceItem.backgroundImage})`,
          backgroundPosition: "center",
          height: width * 1.4,
        }}
        id={SEARCH_DATA_SECTION_ID.serviciesHomepage}
        // sử dụng cùng 2 hành vi hover + click
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)}
        animate={active ? "hover" : "rest"}
        ref={ref}
      >
        {/* overlay đen */}
        <motion.div
          variants={layoutVariants}
          className="absolute inset-0 z-10 bg-black"
        />

        {/* background image zoom */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${serviceItem.backgroundImage})` }}
          variants={backgroundVariants}
        />

        {/* tiêu đề */}
        <p
          className={`relative title-h1 text-left !text-light max-w-[70%] z-40 ${positionTitle}`}
        >
          {serviceItem.title}
        </p>

        {/* icon */}
        <motion.div
          className="absolute bottom-[120px] left-[60px] z-30"
          variants={iconVariants}
        >
          <Icon size={100} className="text-white" />
        </motion.div>

        {/* content (description + link) */}
        <motion.div
          className={`absolute flex flex-col p-4 text-white z-30 ${positionDescription}`}
          variants={contentVariants}
        >
          <p className="text-lg max-w-[80%] text-gray-100">
            {serviceItem.description}
          </p>
          <a
            href={serviceItem.path}
            className="mt-2 underline cursor-pointer text-lg hover:text-secondary text-left px-4"
          >
            Chi tiết
          </a>
        </motion.div>
      </motion.div>
    </SlideInView>
  );
};

const ServicesOverview = () => {
  return (
    <BackgroundLayoutSection>
      <div className="w-full flex justify-center flex-col items-center">
        <SlideInView className="" direction="up" triggerOnce>
          <div
            className="flex flex-col items-center justify-center"
            id={SEARCH_DATA_SECTION_ID.workflowHomepage}
          >
            <SectionTitle title="02_DỊCH VỤ" className="text-center" />
            <p className="text-center title-h1 mb-[10px]">
              Dịch vụ của chúng tôi
            </p>
          </div>
        </SlideInView>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 xl:gap-6 text-center mt-12">
          {SERVICES_OVERVIEW_DATA.map((serviceItem, index) => (
            <ServiceOverviewItem
              key={index}
              serviceItem={serviceItem}
              index={index}
            />
          ))}
        </div>
      </div>
    </BackgroundLayoutSection>
  );
};

export default ServicesOverview;
