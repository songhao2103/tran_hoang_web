import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface CustomSelectProps<T> {
  options: T[];
  getLabel: (option: T | null) => string;
  getEqualOption: (option: T | null, value: T | null) => boolean;
  value: T | null;
  placeholder?: string;
  onChange: (value: T) => void;
}

const CustomSelect = <T,>({
  options,
  getLabel,
  value,
  getEqualOption,
  placeholder = "Chọn...",
  onChange,
}: CustomSelectProps<T>) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2 text-left border border-gray-300 rounded hover:border-gray-400"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {getLabel(value) || placeholder}
        </span>
        <i
          className={`transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <MdKeyboardArrowDown size={22} />
        </i>
      </button>

      {open && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded shadow-lg max-h-60">
          {options.map((opt, index) => (
            <li
              key={index}
              className={`
                px-4 py-2 cursor-pointer 
                hover:bg-gray-100 
                ${getEqualOption(opt, value) ? "bg-gray-200 font-medium" : ""}
              `}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {getLabel(opt)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
