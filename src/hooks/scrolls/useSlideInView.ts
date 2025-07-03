import { useInView } from "framer-motion";
import { useRef } from "react";

export type Direction = "up" | "down" | "left" | "right";

interface SlideInViewOptions {
  direction?: Direction; //Hướng trượt
  triggerOnce?: boolean; //Chỉ chạy 1 lần
  distance?: number; //Độ xa của hiệu ứng
}

export function useSlideInView({
  direction = "up",
  triggerOnce = false,
  distance = 50,
  fromOutside = false,
}: SlideInViewOptions & { fromOutside?: boolean } = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: "0px 0px 50% 0px",
  });

  const getInitial = () => {
    const dist = fromOutside
      ? direction === "left" || direction === "right"
        ? "100vw"
        : "100vh"
      : distance;

    switch (direction) {
      case "up":
        return { opacity: 0, y: dist };
      case "down":
        return { opacity: 0, y: `-${dist}` };
      case "left":
        return { opacity: 0, x: dist };
      case "right":
        return { opacity: 0, x: `-${dist}` };
      default:
        return { opacity: 0 };
    }
  };

  const initialProps = getInitial();

  return {
    ref,
    initialProps,
    animateProps: {
      opacity: isInView ? 1 : 0,
      x: "x" in initialProps ? (isInView ? 0 : initialProps.x) : undefined,
      y: "y" in initialProps ? (isInView ? 0 : initialProps.y) : undefined,
    },
    isInView,
  };
}
