import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import FloatingItem from "./FloatingItem";
import { FiPhone } from "react-icons/fi";
import { BsMessenger } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

const FloatingActions = () => {
  const [percent, setPercent] = useState(0);

  // Bắt event scroll để tính % đã cuộn
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPercent(Math.round(scrolled));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Xây dựng style conic-gradient: màu xanh lá (ví dụ) cho phần đã scroll, xám nhạt cho phần còn lại
  const bgStyle = {
    background: `conic-gradient(#f94735 ${percent}%, #0f313a ${percent}% 100%)`,
  };

  return (
    <div className="flex flex-col items-center gap-y-4">
      <FloatingItem icon={FiPhone} url="https://m.me/100025891761523" />
      <FloatingItem icon={BsMessenger} url="https://m.me/100025891761523" />
      <FloatingItem icon={SiZalo} url="https://zalo.me/0967044241" />
      {percent > 5 && (
        <div
          onClick={handleClick}
          style={bgStyle}
          className="relative flex items-center justify-center transition-transform duration-200 ease-in-out rounded-full shadow-lg cursor-pointer w-14 h-14 hover:scale-110"
        >
          {percent === 100 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <IoIosArrowUp size={24} className="text-light" />
            </div>
          )}

          {percent < 100 && (
            <span className="z-10 text-sm font-semibold pointer-events-none text-light">
              {percent}%
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingActions;
