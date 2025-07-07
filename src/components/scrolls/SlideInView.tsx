import React from "react";
import {
  useSlideInView,
  type Direction,
} from "../../hooks/scrolls/useSlideInView";
import { type HTMLMotionProps, motion } from "framer-motion";
import type { JSX } from "react";

interface SlideInViewProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: Direction;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  distance?: number;
  fromOutside?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const SlideInView: React.FC<SlideInViewProps> = ({
  children,
  direction = "up", //Hướng di chuyển
  triggerOnce = true, //Chỉ chạy một lần?
  delay = 0, //Độ trễ
  duration = 1.2, //thời gian chạy
  distance = 300, //khoảng cách trượt
  fromOutside = false, //Nếu true thì sẽ bay vào ngoài màn hình
  className,
  as = "div",
  ...rest
}) => {
  const { ref, initialProps, animateProps } = useSlideInView({
    direction,
    triggerOnce,
    distance,
    fromOutside,
  });
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      initial={initialProps}
      animate={animateProps}
      transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }}
      className={`w-full ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default SlideInView;
