// components/animations/FadeInView.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
  className?: string;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  delay = 0.1,
  duration = 0.5,
  triggerOnce = true,
  className = "",
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
