import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { BsMessenger } from "react-icons/bs";
import { FiPhone, FiPlus } from "react-icons/fi";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import FloatingItem from "./FloatingItem";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
  exit: { opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.2 } },
};

const FloatingActions = () => {
  const [percent, setPercent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // scroll %
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPercent(Math.round((scrollTop / docHeight) * 100 || 0));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // detect mobile
  useEffect(() => {
    const cb = () => setIsMobile(window.innerWidth <= 768);
    cb();
    window.addEventListener("resize", cb);
    return () => window.removeEventListener("resize", cb);
  }, []);

  const actions = [
    { icon: FiPhone, url: "tel:0967044241" },
    { icon: BsMessenger, url: "https://m.me/100025891761523" },
    { icon: SiZalo, url: "https://zalo.me/0967044241" },
  ];

  const bgStyle = {
    background: `conic-gradient(#f94735 ${percent}%, #0f313a ${percent}% 100%)`,
  };

  return (
    <div className="fixed bottom-6 right-4 flex flex-col items-end gap-y-2 sm:gap-y-4 z-50">
      {/* Animated container */}
      <AnimatePresence>
        {(isOpen || !isMobile) && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`flex flex-col items-end ${
              isMobile ? "gap-y-2" : "gap-y-4"
            }`}
          >
            {actions.map((act, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <FloatingItem icon={act.icon} url={act.url} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      {isMobile && (
        <motion.div variants={itemVariants} onClick={() => setIsOpen(!isOpen)}>
          <FloatingItem
            icon={isOpen ? IoMdClose : FiPlus}
            url=""
            active={isOpen}
          />
        </motion.div>
      )}

      {/* Scroll to top */}
      {percent > 5 && (
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={bgStyle}
          className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform bg-white"
        >
          {percent === 100 ? (
            <IoIosArrowUp size={isMobile ? 20 : 24} className="text-light" />
          ) : (
            <span className="z-10 text-xs md:text-sm font-semibold text-light">
              {percent}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
