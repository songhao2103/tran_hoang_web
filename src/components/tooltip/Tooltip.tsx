import React, { type ReactNode } from "react";

interface ITooltipProps {
  title: string;
  children: ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({ title, children }) => {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block whitespace-nowrap rounded bg-gray-400 px-2 py-1 text-xs text-white z-50">
        {title}
        <div className="absolute left-1/2 top-full -translate-x-1/2 w-2 h-2 bg-gray-400 rotate-45"></div>
      </div>
    </div>
  );
};

export default Tooltip;
