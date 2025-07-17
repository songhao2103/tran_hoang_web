import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import useWindowWidth from "../../hooks/dom/useWindownWidth";

interface IFloatingItemProps {
  url: string;
  icon: IconType | string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  active?: boolean;
}
const FloatingItem: React.FC<IFloatingItemProps> = ({
  url,
  icon,
  active = false,
}) => {
  const Icon = icon;
  const windowWidth = useWindowWidth();
  return (
    <div>
      <motion.div
        className={`flex items-center justify-center rounded-full shadow-lg cursor-pointer w-10 h-10 md:w-14 lg:h-14 ${
          active ? "bg-dark text-light" : "bg-secondary text-white "
        }`}
        initial={{ scale: 1, rotate: 0 }}
        animate={{ y: [0, -6, 0] }} // chuyển động lên xuống liên tục
        transition={{
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        whileHover={{
          scale: 1.2, // phóng to khi hover
          rotate: [0, 10, -10, 0], // hơi lắc lư
          boxShadow: "0px 0px 12px rgba(0,0,0,0.4)",
        }}
        whileTap={{ scale: 0.9, rotate: 0 }} // nhấn xuống
        onClick={() => {
          if (url) {
            window.open(url, "_blank");
          }
        }}
      >
        <Icon size={windowWidth > 720 ? 24 : 20} className="text-white" />
      </motion.div>
    </div>
  );
};

export default FloatingItem;
