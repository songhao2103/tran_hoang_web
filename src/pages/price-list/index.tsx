import { useMemo, useState } from "react";
import Card from "../../components/cards/Card";
// import CostOfOrder from "./components/CostOfOrder";
import { PRICE_LIST } from "./data";
import { IoMdArrowForward } from "react-icons/io";
import CustomSelect from "../../components/selects/CustomSelect";
import type { IPriceList } from "./priceList.type";
import useWindowWidth from "../../hooks/dom/useWindownWidth";

const PriceList = () => {
  const windowWidth = useWindowWidth();
  const [priceListActive, setPriceListActive] = useState<IPriceList | null>(
    PRICE_LIST[0] || null
  );

  const handleTogglePriceList = (value: IPriceList) => {
    if (value !== priceListActive) setPriceListActive(value);
  };

  const Table = useMemo(() => {
    return (
      PRICE_LIST.find((item) => item.value === priceListActive?.value)
        ?.component || null
    );
  }, [PRICE_LIST, priceListActive]);

  return (
    <div className="flex mt-[30px] md:mt-[50px] xl:mt-[70px] gap-y-10 lg:gap-y-0 lg:gap-x-6 flex-col lg:flex-row">
      {windowWidth >= 1024 && (
        <div className="w-[30%] pt-[62px]">
          <Card title="BẢNG GIÁ">
            <div className="flex flex-col gap-y-2">
              {PRICE_LIST.map((item) => {
                const isActive = item.value === priceListActive?.value;
                return (
                  <li
                    key={item.value}
                    className={`group flex items-center justify-between px-4 py-3 border transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "bg-secondary text-white font-semibold"
                        : "text-[#2d3e50] hover:bg-secondary hover:text-white"
                    }`}
                    onClick={() => handleTogglePriceList(item)}
                  >
                    <span className="truncate">{item.title}</span>
                    <span
                      className={`text-lg transition-transform duration-300 pl-[30px] ${
                        isActive ? "" : "group-hover:translate-x-1 "
                      }`}
                    >
                      <IoMdArrowForward />
                    </span>
                  </li>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {windowWidth < 1024 && (
        <div className="w-full max-w-[400px]">
          <CustomSelect<IPriceList>
            options={PRICE_LIST}
            value={priceListActive}
            onChange={(option) => {
              if (option.value === priceListActive?.value) return;
              setPriceListActive(option);
            }}
            getLabel={(option) => option?.title || "Bảng giá"}
            getEqualOption={(option, value) => option?.value === value?.value}
          />
        </div>
      )}

      {Table && (
        <div className="w-full lg:w-[70%]">
          <p className="mb-4 text-center title-h3">{priceListActive?.title}</p>
          <div className="w-full overflow-x-auto rounded scrollbar-light">
            <Table />
          </div>

          {priceListActive?.value === 3 && (
            <div className="flex flex-col mt-6 gap-y-1">
              <p className="mb-1 title-h5">ĐIỀU KIỆN VÀ ĐIỀU KHOẢN CHUNG</p>
              <p>1. Với những lô hàng số lượng lớn sẽ trao đổi và thỏa thuận</p>
              <p>
                2. Hàng có cân nặng 300kg hoặc 3 khối trở lên 1 mã hàng sẽ được
                miễn phí giao hàng nội thành Hà Nội, Đà Nẵng, Tp Hồ Chí Minh
              </p>
              <p>
                3. Đơn hàng không đủ điều kiện miễn phí giao hàng sẽ căn cứ vào
                địa điểm giao hàng để báo cước giao hàng
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceList;
