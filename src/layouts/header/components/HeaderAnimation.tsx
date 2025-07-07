import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { useHeader } from "../constance";
import { RiCloseFill } from "react-icons/ri";
import { GrSearch } from "react-icons/gr";

const HeaderAnimation = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);
  const { isInputSearchOpen, toggleInputSearchOpen } = useHeader();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        if (!showSticky) {
          setShowSticky(true);
          controls.start("sticky");
        }
      } else {
        if (showSticky) {
          setShowSticky(false);
          controls.start("default");
        } else {
          controls.start("default");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSticky, controls]);

  const variants = {
    default: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
        y: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1],
        },
      },
      backgroundColor: "var(--color-text-black)",
    },
    sticky: {
      opacity: [0, 1],
      scaleY: [0.8, 1],
      y: [-20, 0],
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div ref={headerRef} className="sticky top-0 z-50 w-full">
      <motion.div
        variants={variants}
        initial="default"
        animate={controls}
        layout // 👈 Animate mọi thay đổi chiều cao
        className="max-w-[1820px] mx-auto h-auto flex flex-col bg-dark"
      >
        {/* Input search */}
        <motion.div
          animate={isInputSearchOpen ? "open" : "closed"}
          variants={{
            open: {
              height: "50px",
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" },
            },
            closed: {
              height: 0,
              opacity: 0,
              y: -20,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
          className="w-full overflow-hidden"
        >
          <div className="relative flex items-center justify-center w-full h-[50px] bg-secondary">
            <input
              type="text"
              autoFocus
              placeholder="Tìm kiếm..."
              className="caret-white block w-full pl-[60px] outline-none bg-secondary placeholder:text-sm placeholder:text-light"
            />
            <RiCloseFill
              onClick={toggleInputSearchOpen}
              className="absolute ml-2 text-xl cursor-pointer right-4 sm:right-8 text-light"
            />
            <GrSearch className="absolute left-8 top-[50%] -translate-y-1/2 text-light" />
          </div>
        </motion.div>

        {/* Header chính */}
        <Header />
      </motion.div>
    </div>
  );
};

export default HeaderAnimation;
