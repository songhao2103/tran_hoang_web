import BannerSlide from "./components/BannerSlide";
import IntroduceSections from "./components/IntroduceSections";
import MoreAboutUs from "./components/MoreAboutUs";
import ServicesOverview from "./components/ServicesOverview";

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Banner - không chứa introduce */}
      <div className="relative z-0">
        <BannerSlide />
      </div>

      {/* Introduce - đè lên banner */}
      <div className="relative z-10 -mt-[100px] flex justify-center">
        <IntroduceSections />
      </div>

      {/* MoreAboutUs nằm sau IntroduceSections */}
      <div className="mt-[50px]">
        <MoreAboutUs />
      </div>

      {/* Services Overview */}
      <div>
        <ServicesOverview />
      </div>
    </div>
  );
};

export default HomePage;
