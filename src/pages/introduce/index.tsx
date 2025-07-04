import React from "react";
import AboutUs from "./components/AboutUs";
import TranHoangInfo from "./components/TranHoangInfo";
import LayoutContent from "../../layouts/LayoutContent";
import Workflow from "../homepages/components/Workflow";
import CompanyHistory from "./components/CompanyHistory";
import StatisticalIntroduce from "./components/StatisticalIntroduce";

const Introduce = () => {
  return (
    <div>
      <LayoutContent>
        <div className="flex flex-col justify-between gap-x-10 lg:flex-row gap-y-4 lg:gap-y-0">
          <AboutUs />
          <TranHoangInfo />
        </div>
      </LayoutContent>
      <div className="mt-[100px]">
        <Workflow />
      </div>
      <CompanyHistory />

      <StatisticalIntroduce />
    </div>
  );
};

export default Introduce;
