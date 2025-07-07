import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import type { IServiceOverviewItem } from "../homepage.type";
import SlideInView from "../../../components/scrolls/SlideInView";
import { SERVICES_OVERVIEW_DATA } from "../data";

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
  const Icon = serviceItem.icon;

  return (
    <SlideInView
      direction="up"
      triggerOnce
      className="w-full"
      delay={index * 0.1}
    >
      <motion.div
        className="relative w-full h-64 overflow-hidden rounded-2xl"
        style={{
          backgroundImage: `url(${serviceItem.backgroundImage})`,
          backgroundPosition: "center",
        }}
        // sử dụng cùng 2 hành vi hover + click
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setActive((prev) => !prev)}
        animate={active ? "hover" : "rest"}
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
        <p className="relative top-[30px] left-[30px] title-h4 !text-light max-w-[60%] z-40">
          {serviceItem.title}
        </p>

        {/* icon */}
        <motion.div
          className="absolute bottom-[70px] left-[50px] z-30"
          variants={iconVariants}
        >
          <Icon size={48} className="text-white" />
        </motion.div>

        {/* content (description + link) */}
        <motion.div
          className="absolute bottom-[40px] left-[30px] flex flex-col p-4 text-white z-30"
          variants={contentVariants}
        >
          <p className="text-xs max-w-[60%] text-gray-100">
            {serviceItem.description}
          </p>
          <a
            href={serviceItem.path}
            className="mt-2 text-xs underline cursor-pointer"
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
    <div className="w-full mt-[100px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {SERVICES_OVERVIEW_DATA.map((serviceItem, index) => (
          <ServiceOverviewItem
            key={index}
            serviceItem={serviceItem}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
