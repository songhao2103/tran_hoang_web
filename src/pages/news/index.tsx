import BackgroundLayoutSection from "../../layouts/BackgroundLayoutSection";
import LayoutNew from "./components/LayoutNew";
import NewList from "./components/NewList";

const News = () => {
  return (
    <BackgroundLayoutSection>
      <LayoutNew>
        <NewList />
      </LayoutNew>
    </BackgroundLayoutSection>
  );
};

export default News;
