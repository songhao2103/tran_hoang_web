import React, { type ReactNode } from "react";

interface ITitleProps {
  className?: string;
  children: ReactNode;
}
const Title: React.FC<ITitleProps> = ({ className, children }) => {
  return <div className={`my-6 title-h4 ${className}`}>{children}</div>;
};

export default Title;
