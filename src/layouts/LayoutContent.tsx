import React, { type ReactNode } from "react";

const LayoutContent = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1380px] mx-auto">{children}</div>;
};

export default LayoutContent;
