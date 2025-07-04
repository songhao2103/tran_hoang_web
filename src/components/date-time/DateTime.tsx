import React from "react";
import { CiCalendarDate } from "react-icons/ci";

interface DateTimeProps {
  dateTime: string;
  type?: "default" | "dd/mm/yy" | "dd/mm/yyyy";
  rootClass?: string;
  timeClass?: string;
  hideIcon?: boolean;
}

const DateTime: React.FC<DateTimeProps> = ({
  dateTime,
  type = "default",
  rootClass = "",
  timeClass = "",
  hideIcon = false,
}) => {
  const date = new Date(dateTime);

  const day = date.getDate().toString().padStart(2, "0");
  const monthNumeric = (date.getMonth() + 1).toString().padStart(2, "0");
  const monthAbbr = date.toLocaleString("en-US", { month: "short" });
  const yearFull = date.getFullYear().toString();
  const yearShort = yearFull.slice(-2);

  switch (type) {
    case "dd/mm/yy":
      return (
        <div className={`${rootClass} flex items-center gap-x-3`}>
          {!hideIcon && <CiCalendarDate size={18} />}

          <p>{`${day}/${monthNumeric}/${yearShort}`}</p>
        </div>
      );
    case "dd/mm/yyyy":
      return (
        <div className={`${rootClass} flex items-center gap-x-3`}>
          {!hideIcon && <CiCalendarDate size={18} />}
          <p
            className={`${timeClass} font-normal`}
          >{`${day}/${monthNumeric}/${yearFull}`}</p>
        </div>
      );
    case "default":
    default:
      return (
        <div
          className={`${rootClass} flex items-center gap-x-3`}
        >{`${day} ${monthAbbr} ${yearFull}`}</div>
      );
  }
};

export default DateTime;
