import { COST_OF_ORDER_LIST } from "../data";
import { GiCheckMark } from "react-icons/gi";

const CostOfOrder = () => {
  return (
    <table className="w-full text-sm border-collapse min-w-[980px]">
      <thead className="text-white bg-dark">
        <tr>
          <th className="px-4 py-2 text-center border border-gray-400">
            Tên chi phí
          </th>
          <th className="px-4 py-2 text-center border border-gray-400">
            Giải thích
          </th>
          <th className="px-4 py-2 text-center border border-gray-400">
            Bắt buộc*
          </th>
          <th className="px-4 py-2 text-center border border-gray-400">
            Tùy chọn
          </th>
        </tr>
      </thead>
      <tbody>
        {COST_OF_ORDER_LIST.map((item, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border border-gray-400">{item.name}</td>
            <td className="px-4 py-2 border border-gray-400">
              {item.description}
            </td>
            <td className="px-4 py-2 text-center border border-gray-400">
              {item.required && (
                <GiCheckMark className="mx-auto text-green-600" size={18} />
              )}
            </td>
            <td className="px-4 py-2 text-center border border-gray-400">
              {!item.required && (
                <GiCheckMark className="mx-auto text-blue-600" size={18} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CostOfOrder;
