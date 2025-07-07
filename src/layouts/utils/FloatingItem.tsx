import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface IFloatingItemProps {
  url: string;
  icon: IconType | string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
const FloatingItem: React.FC<IFloatingItemProps> = ({ url, icon }) => {
  const Icon = icon;
  return (
    <div>
      <motion.div
        className={`flex items-center justify-center rounded-full shadow-lg cursor-pointer bg-secondary w-14 h-14`}
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
        onClick={() => window.open(url, "_blank")}
      >
        <Icon size={24} className="text-white" />
      </motion.div>
    </div>
  );
};

export default FloatingItem;
