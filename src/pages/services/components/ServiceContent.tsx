import React, { useMemo } from "react";
import { SERVICES_DATA } from "../data";
import type { TMenuConfig } from "../../../layouts/menu/type";
import type { IPartsItem } from "../service.type";
import SlideInView from "../../../components/scrolls/SlideInView";

interface IServiceContentProps {
  activeService: TMenuConfig;
}

const ServiceContent: React.FC<IServiceContentProps> = ({ activeService }) => {
  const data = useMemo(() => {
    return SERVICES_DATA[activeService.path];
  }, [activeService]);

  if (!data) return null;
  return (
    <div className="w-full">
      <SlideInView direction="up" delay={0.2} className="w-full" fromOutside>
        <img
          src={data.image}
          alt=""
          className="w-full h-[465px] object-cover"
        />
      </SlideInView>

      <div className="mt-10">
        <div>
          <p className="title-h3 mb-3">{activeService.title}</p>
          <p>{data.description}</p>
        </div>

        <div className="mt-10">
          <p className="title-h4 mb-6">{data.titlePart}</p>
          <div className="flex flex-col gap-y-6">
            {data.parts.map((part: IPartsItem) => (
              <div>
                <p className="title-h5">{part.title}</p>
                <p className="ml-4">{part.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
