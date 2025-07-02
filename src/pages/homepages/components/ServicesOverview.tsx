import { motion, type Variants } from "framer-motion";
import { SERVICES_OVERVIEW_DATA } from "../data";
import type { IServiceOverviewItem } from "../homepage.type";
import { ROUTE_PATH } from "../../../routes/routePath";
import SlideInView from "../../../components/scrolls/SlideInView";

const containerVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const layoutVariants: Variants = {
  rest: { opacity: 0.3 },
  hover: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconVariants: Variants = {
  rest: { opacity: 1 },
  hover: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  rest: { opacity: 0, y: 40 },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ServiceOverviewItem = ({
  serviceItem,
  index,
}: {
  serviceItem: IServiceOverviewItem;
  index: number;
}) => {
  const Icon = serviceItem.icon;

  return (
    <SlideInView
      direction="up"
      triggerOnce
      className="w-full"
      delay={index * 0.1}
    >
      <motion.div
        className="relative w-full h-64 overflow-hidden cursor-pointer rounded-2xl "
        style={{
          backgroundImage: `url(${serviceItem.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={containerVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          variants={layoutVariants}
          className="absolute inset-0 bg-black"
        />
        <p className="relative top-[30px] left-[30px] title-h4 text-white max-w-[60%]">
          {serviceItem.title}
        </p>
        <motion.div
          className="absolute bottom-[40px] left-[30px]"
          variants={iconVariants}
        >
          <Icon size={48} className="text-white" />
        </motion.div>

        <motion.div
          className="absolute bottom-[40px] left-[30px] flex flex-col p-4 text-white"
          variants={contentVariants}
        >
          <p className="text-xs max-w-[60%] text-gray-100">
            {serviceItem.description}
          </p>
          <a href={ROUTE_PATH.SERVICES} className="text-xs underline">
            Chi tiết
          </a>
        </motion.div>
      </motion.div>
    </SlideInView>
  );
};

const ServicesOverview = () => {
  return (
    <div className="w-full bg-blue-300">
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
