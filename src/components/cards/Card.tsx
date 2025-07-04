import React, { type ReactNode } from "react";
interface ICardProps {
  children: ReactNode;
  title: string;
}

const Card: React.FC<ICardProps> = ({ children, title }) => {
  return (
    <div className="w-full shadow-md">
      <p className="py-3 bg-dark pl-4 text-lg text-light">{title}</p>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
