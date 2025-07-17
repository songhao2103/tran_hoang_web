import AboutUs from "./components/AboutUs";
import TranHoangInfo from "./components/TranHoangInfo";
import LayoutContent from "../../layouts/LayoutContent";
import Workflow from "../homepages/components/Workflow";
import CompanyHistory from "./components/CompanyHistory";
import StatisticalIntroduce from "./components/StatisticalIntroduce";
import SlideInView from "../../components/scrolls/SlideInView";
import { SEARCH_DATA_SECTION_ID } from "../../datas/pathSearchDatas";
import BackgroundLayoutSection from "../../layouts/BackgroundLayoutSection";

const Introduce = () => {
  return (
    <div>
      <BackgroundLayoutSection>
        <LayoutContent>
          <div className="flex flex-col justify-between gap-x-10 lg:flex-row gap-y-4 lg:gap-y-0 items-center">
            <SlideInView>
              <AboutUs />
            </SlideInView>
            <SlideInView delay={0.2}>
              <TranHoangInfo />
            </SlideInView>
          </div>
        </LayoutContent>
      </BackgroundLayoutSection>

      <div className="mt-[100px]" id={SEARCH_DATA_SECTION_ID.workflowIntroduce}>
        <Workflow />
      </div>
      <CompanyHistory />

      <StatisticalIntroduce />
    </div>
  );
};

export default Introduce;
