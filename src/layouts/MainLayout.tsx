// MainLayout.tsx
import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Header from "./header/Header";
import { HeaderProvider } from "./header/HeaderContext";
import Footer from "./footer";

const headerVariants: Variants = {
  hidden: {
    y: "-100%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  visible: {
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollY = useRef(0);
  const scrolledUpEnough = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      const isScrollingUp = currentY < prevScrollY.current;
      const isScrollingDown = currentY > prevScrollY.current;

      // Điều kiện: khi scroll lên trên cùng → reset để được scroll tiếp mới hiện lại
      if (currentY < 100) {
        scrolledUpEnough.current = false;
        setShowHeader(true); // sticky như bình thường
      }

      // Nếu scroll xuống đủ xa thì ẩn tạm header đi
      if (isScrollingDown && currentY > 150 && !scrolledUpEnough.current) {
        setShowHeader(false);
      }

      // Nếu đang ẩn và scroll lên → trồi lại
      if (isScrollingUp && !showHeader && currentY > 100) {
        scrolledUpEnough.current = true;
        setShowHeader(true);
      }

      prevScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderProvider>
        <motion.div
          className="sticky top-0 z-50 w-full bg-gray-900 text-gray-100 shadow"
          initial="visible"
          animate={showHeader ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div className="max-w-[1820px] w-full mx-auto px-4 xl:px-2">
            <Header />
          </div>
        </motion.div>
      </HeaderProvider>

      <div className="flex-1 max-w-[1820px] w-full mx-auto px-4 xl:px-2 text-gray-600 font-medium">
        {children}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
