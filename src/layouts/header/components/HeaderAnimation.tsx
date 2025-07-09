import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Header from "../Header";
import { useHeader } from "../constance";
import InputSearch from "../../input-search/InputSearch";

const HeaderAnimation = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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
      y: 0,
      opacity: 1,
      backgroundColor: "var(--color-text-black)",
      transition: {
        y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      },
    },
    sticky: {
      // Slide từ trên xuống:
      y: ["-100%", "0%"],
      opacity: [0, 1],
      transition: {
        y: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      },
    },
  };

  useEffect(() => {
    if (isInputSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isInputSearchOpen]);

  return (
    <div ref={headerRef} className="sticky top-0 z-50 w-full">
      <motion.div
        variants={variants}
        initial={false}
        animate={controls}
        layout // 👈 Animate mọi thay đổi chiều cao
        className="flex flex-col h-auto bg-dark"
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
          className="w-full  max-w-[1820px] mx-auto"
        >
          <InputSearch
            toggleInputSearchOpen={toggleInputSearchOpen}
            inputRef={inputRef}
          />
        </motion.div>

        {/* Header chính */}
        <Header />
      </motion.div>
    </div>
  );
};

export default HeaderAnimation;
