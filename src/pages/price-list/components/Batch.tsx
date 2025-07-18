import { BATCH_LIST } from "../data";
import type { IBatchItem } from "../priceList.type";

const Batch = () => {
  return (
    <div className="">
      <table className="w-full text-sm border border-collapse border-gray-400 ">
        <thead>
          <tr className="text-white bg-dark">
            <th className="px-3 py-2 border border-gray-400">STT</th>
            <th className="px-3 py-2 text-left border border-gray-400">
              LOẠI HÀNG
            </th>
            <th
              className="px-3 py-2 text-center border border-gray-400"
              colSpan={2}
            >
              HÀ NỘI
            </th>
            <th
              className="px-3 py-2 text-center border border-gray-400"
              colSpan={2}
            >
              HỒ CHÍ MINH
            </th>
          </tr>
          <tr className="text-white bg-dark">
            <th className="px-3 py-2 border border-gray-400"></th>
            <th className="px-3 py-2 border border-gray-400"></th>
            <th className="px-3 py-2 border border-gray-400">KG (&gt;100KG)</th>
            <th className="px-3 py-2 border border-gray-400">
              KHỐI (&gt;1 Khối)
            </th>
            <th className="px-3 py-2 border border-gray-400">KG (&gt;100KG)</th>
            <th className="px-3 py-2 border border-gray-400">
              KHỐI (&gt;1 Khối)
            </th>
          </tr>
        </thead>

        <tbody>
          {BATCH_LIST.map((r: IBatchItem) => (
            <tr key={r.id} className="even:bg-gray-50 hover:bg-gray-100">
              <td className="px-3 py-2 text-center border border-gray-400">
                {r.id}
              </td>
              <td className="px-3 py-2 border border-gray-400">{r.category}</td>
              <td className="px-3 py-2 text-right border border-gray-400">
                {r.haNoiKg != null ? r.haNoiKg.toLocaleString() : "-"}
              </td>
              <td className="px-3 py-2 text-right border border-gray-400">
                {r.haNoiKhoi != null ? r.haNoiKhoi.toLocaleString() : "-"}
              </td>
              <td className="px-3 py-2 text-right border border-gray-400">
                {r.hcmKg != null ? r.hcmKg.toLocaleString() : "-"}
              </td>
              <td className="px-3 py-2 text-right border border-gray-400">
                {r.hcmKhoi != null ? r.hcmKhoi.toLocaleString() : "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Batch;
