import React from "react";
import AboutUs from "./components/AboutUs";
import TranHoangInfo from "./components/TranHoangInfo";
import LayoutContent from "../../layouts/LayoutContent";
import Workflow from "../homepages/components/Workflow";
import CompanyHistory from "./components/CompanyHistory";

const Introduce = () => {
  return (
    <div>
      <LayoutContent>
        <div className="flex justify-between gap-x-10">
          <AboutUs />
          <TranHoangInfo />
        </div>
      </LayoutContent>
      <div className="mt-[200px]">
        <Workflow />
      </div>
      <CompanyHistory />
    </div>
  );
};

export default Introduce;
