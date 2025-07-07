import React from "react";

interface ISectionTitleProps {
  title: string;
  className?: string;
}
const SectionTitle: React.FC<ISectionTitleProps> = ({ title, className }) => {
  return (
    <p
      className={`w-full title-h6 !text-secondary mb-2 !font-semibold ${className}`}
    >
      {title}
    </p>
  );
};

export default SectionTitle;
