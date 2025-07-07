import BannerSlide from "./components/BannerSlide";
import { Feedbacks } from "./components/Feedbacks";
import IntroduceSections from "./components/IntroduceSections";
import MoreAboutUs from "./components/MoreAboutUs";
import ServicesOverview from "./components/ServicesOverview";
import Statistical from "./components/Statistical";
import Workflow from "./components/Workflow";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Banner - không chứa introduce */}
      <div className="relative z-0">
        <BannerSlide />
      </div>

      {/* Introduce - đè lên banner */}
      <div className="relative z-10  -mt-[30px] lg:-mt-[60px] xl:-mt-[100px] flex justify-center">
        <IntroduceSections />
      </div>

      {/* MoreAboutUs nằm sau IntroduceSections */}
      <div className="mt-[50px]">
        <MoreAboutUs />
      </div>

      {/* Services Overview */}
      <ServicesOverview />

      {/* Workflow */}
      <Workflow />

      {/* Feedbacks */}
      <Feedbacks />

      {/* Statistical */}
      <Statistical />
    </div>
  );
};

export default HomePage;
