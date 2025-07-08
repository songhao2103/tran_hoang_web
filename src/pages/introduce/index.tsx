import AboutUs from "./components/AboutUs";
import TranHoangInfo from "./components/TranHoangInfo";
import LayoutContent from "../../layouts/LayoutContent";
import Workflow from "../homepages/components/Workflow";
import CompanyHistory from "./components/CompanyHistory";
import StatisticalIntroduce from "./components/StatisticalIntroduce";
import SlideInView from "../../components/scrolls/SlideInView";
import { SEARCH_DATA_SECTION_ID } from "../../datas/pathSearchDatas";

const Introduce = () => {
  return (
    <div>
      <LayoutContent>
        <div className="flex flex-col justify-between gap-x-10 lg:flex-row gap-y-4 lg:gap-y-0">
          <SlideInView>
            <AboutUs />
          </SlideInView>
          <SlideInView delay={0.2}>
            <TranHoangInfo />
          </SlideInView>
        </div>
      </LayoutContent>
      <div className="mt-[100px]" id={SEARCH_DATA_SECTION_ID.workflowIntroduce}>
        <Workflow />
      </div>
      <CompanyHistory />

      <StatisticalIntroduce />
    </div>
  );
};

export default Introduce;
