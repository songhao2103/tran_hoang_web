import React from "react";
import { COST_OF_ORDER_LIST } from "../data";
import { GiCheckMark } from "react-icons/gi";

const CostOfOrder: React.FC = () => {
  return (
    <div className="overflow-x-auto rounded border border-gray-400">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-dark text-white">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Tên chi phí
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Giải thích
            </th>
            <th className="border border-gray-400 px-4 py-2 text-center">
              Bắt buộc*
            </th>
            <th className="border border-gray-400 px-4 py-2 text-center">
              Tùy chọn
            </th>
          </tr>
        </thead>
        <tbody>
          {COST_OF_ORDER_LIST.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-400 px-4 py-2">{item.name}</td>
              <td className="border border-gray-400 px-4 py-2">
                {item.description}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {item.required && (
                  <GiCheckMark className="mx-auto text-green-600" size={18} />
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {!item.required && (
                  <GiCheckMark className="mx-auto text-blue-600" size={18} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostOfOrder;
