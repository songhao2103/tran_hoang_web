import BannerSlide from "./components/BannerSlide";
import IntroduceSections from "./components/IntroduceSections";
import MoreAboutUs from "./components/MoreAboutUs";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
