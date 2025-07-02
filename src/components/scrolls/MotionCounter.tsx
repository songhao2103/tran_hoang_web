import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
  delay?: number;
}

const MotionCounter = ({
  end,
  duration = 2,
  className,
  delay,
}: CounterProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const motionVal = useMotionValue(0);

  // Format lại giá trị đếm
  const formatted = useTransform(motionVal, (latest) =>
    Math.floor(latest).toLocaleString("vi-VN")
  );

  const inView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, end, { duration, delay });
      return () => controls.stop();
    }
  }, [inView, end, duration, motionVal]);

  return (
    <p ref={ref} className="font-bold text-4xl">
      <motion.span className={className}>{formatted}</motion.span>
      {inView && "+"}
    </p>
  );
};

export default MotionCounter;
