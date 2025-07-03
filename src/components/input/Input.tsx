import React from "react";
import type { InputCommonProps } from "./input.type";
import { SIZE_INPUT } from "./constance";

const InputCommon: React.FC<InputCommonProps> = ({
  label,
  value,
  onChange,
  placeholder,
  helperText,
  type = "text",
  disabled = false,
  size = "small",
  required,
  autoFocus = false,
  id,
  multiple = false,
  rows = 1,
}) => {
  const padding = SIZE_INPUT[size];
  return (
    <div>
      {label && (
        <label className="font-normal block mb-1" htmlFor={id || ""}>
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}

      <div>
        {multiple ? (
          <textarea
            className="border w-full outline-none hover:border-gray-700 focus:border-blue-500 rounded-[5px] placeholder:font-normal resize-y"
            style={{ padding: `${padding.px}px ${padding.py}px` }}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              onChange(e.target.value)
            }
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            id={id}
            name=""
            rows={rows}
          />
        ) : (
          <input
            className="border w-full outline-none hover:border-gray-700 focus:border-blue-500 rounded-[5px] placeholder:font-normal"
            style={{ padding: `${padding.px}px ${padding.py}px` }}
            type={type}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            placeholder={placeholder}
            disabled={disabled}
            autoFocus={autoFocus}
            id={id}
            name=""
          />
        )}
      </div>

      {helperText && <span className="text-xs text-red-600">{helperText}</span>}
    </div>
  );
};

export default InputCommon;
