import type { ReactNode } from "react";

const BackgroundLayoutSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white py-6 lg:py-[50px] 2xl:py-[70px] mt-[50px] lg:mt[70px] 2xl:mt-[100px] ${className}`}
    >
      {children}
    </div>
  );
};

export default BackgroundLayoutSection;
