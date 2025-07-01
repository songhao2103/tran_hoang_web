import React from "react";
import { INTRODUCE_SECTIONS_DATA } from "../data";
import type { IIntroduceSectionItem } from "../homepage.type";

interface IIntroduceSectionItemProps {
  introduceSection: IIntroduceSectionItem;
}
const IntroduceSectionItem: React.FC<IIntroduceSectionItemProps> = ({
  introduceSection,
}) => {
  const Icon = introduceSection.icon;
  return (
    <div className="w-full p-[50px] rounded-[10px] shadow-md border flex flex-col items-center max-w-[400px] h-full bg-white hover:shadow-lg hover:-translate-y-1 transition transition-medium">
      <div className="w-[70px] h-[70px] rounded-full border flex items-center justify-center">
        {<Icon size={40} />}
      </div>
      <div className="flex items-center flex-col mt-6">
        <p className="title-h3 text-center">{introduceSection.title}</p>
        <p className="text-center mt-3">{introduceSection.description}</p>
      </div>
    </div>
  );
};
const IntroduceSections = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-x-6">
        {INTRODUCE_SECTIONS_DATA.map((introduceSection, index) => (
          <IntroduceSectionItem
            introduceSection={introduceSection}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default IntroduceSections;
