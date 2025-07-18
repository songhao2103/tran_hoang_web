import { PURCHASING_SERVICE } from "../data";

const PurchasingService = () => {
  return (
    <table className="w-full text-sm border-collapse min-w-[720px]">
      <thead className="text-white bg-dark">
        <tr>
          <th className="px-4 py-2 text-center border border-gray-400">
            Giá trị đơn hàng
          </th>
          <th className="px-4 py-2 text-center border border-gray-400">
            %Phí dịch vụ
          </th>
        </tr>
      </thead>
      <tbody>
        {PURCHASING_SERVICE.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 text-center border border-gray-400">
              {item.orderValueRange}
            </td>
            <td className="px-4 py-2 text-center border border-gray-400">
              {item.serviceFeePercent}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchasingService;
