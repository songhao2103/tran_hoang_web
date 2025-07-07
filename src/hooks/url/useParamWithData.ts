import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useParamWithData = <T extends { id: number | string }>(
  datas: T[]
) => {
  const location = useLocation();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const id = location.pathname.split("/").pop();
    const item = datas.find((data) => data.id === Number(id));
    if (!item) {
      console.error("Item not found");
      return;
    }
    setData(item);
  }, [location.pathname, datas]);

  return data;
};
