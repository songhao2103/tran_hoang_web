import Card from "../../components/cards/Card";
import CostOfOrder from "./components/CostOfOrder";

const PriceList = () => {
  return (
    <div className="flex gap-x-6 ">
      <div className="w-[30%]">
        <Card title="BẢNG GIÁ">
          <></>
        </Card>
      </div>

      <div className="w-full">
        <CostOfOrder />
      </div>
    </div>
  );
};

export default PriceList;
