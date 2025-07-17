import React, { type ReactNode } from "react";

interface IParagraphProps {
  className?: string;
  children: ReactNode;
  after?: string;
}
const Paragraph: React.FC<IParagraphProps> = ({
  className,
  children,
  after,
}) => {
  return (
    <div className={`pb-2 font-normal text-gray-800 ${className}`}>
      {after ? <span className="px-3">{after}</span> : null}
      {children}
    </div>
  );
};

export default Paragraph;
