import React from "react";
import { VOLUME_PACKAGING_FEES, WEIGHT_PACKAGING_FEE } from "../data";

const TimberFee = () => {
  return (
    <div className="min-w-[840px]">
      <table className="w-full text-sm border border-collapse border-gray-400 table-fixed">
        <thead>
          <tr className="text-white bg-dark">
            <th className="w-1/3 px-4 py-2 border border-gray-400">
              TRỌNG LƯỢNG
            </th>
            <th className="w-1/3 px-4 py-2 text-center border border-gray-400">
              KG ĐẦU TIÊN
            </th>
            <th className="w-1/3 px-4 py-2 text-center border border-gray-400">
              KG TIẾP THEO
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-2 border border-gray-400">
              {WEIGHT_PACKAGING_FEE.label}
            </td>
            <td className="px-4 py-2 text-right border border-gray-400">
              {WEIGHT_PACKAGING_FEE.firstKgPrice.toLocaleString()} VND
            </td>
            <td className="px-4 py-2 text-right border border-gray-400">
              {WEIGHT_PACKAGING_FEE.nextKgPrice.toLocaleString()} VND
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mt-6 text-sm border border-collapse border-gray-400 table-fixed">
        <thead>
          <tr className="text-white bg-dark">
            <th className="w-1/2 px-4 py-2 border border-gray-400">
              KHỐI LƯỢNG
            </th>
            <th className="w-1/2 px-4 py-2 border border-gray-400">
              PHÍ ĐÓNG KIỆN
            </th>
          </tr>
        </thead>
        <tbody>
          {VOLUME_PACKAGING_FEES.map((v, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 border border-gray-400">
                {v.volumeRange}
              </td>
              <td className="px-4 py-2 border border-gray-400">
                {v.feeDescription}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimberFee;
