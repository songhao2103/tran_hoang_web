import React, { useState } from "react";
import type { InputCommonProps } from "./input.type";
import { SIZE_INPUT } from "./constance";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

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
  const [inputType, setInputType] =
    useState<React.InputHTMLAttributes<unknown>["type"]>(type);

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
          <div className="relative">
            <input
              className="border w-full outline-none hover:border-gray-700 focus:border-blue-500 rounded-[5px] placeholder:font-normal"
              style={{ padding: `${padding.px}px ${padding.py}px` }}
              type={inputType}
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
            {type === "password" && (
              <div className="absolute right-4 top-[50%] -translate-y-1/2 cursor-pointer">
                {inputType === "password" ? (
                  <FaRegEyeSlash onClick={() => setInputType("text")} />
                ) : (
                  <FaRegEye onClick={() => setInputType("password")} />
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {helperText && <span className="text-xs text-red-600">{helperText}</span>}
    </div>
  );
};

export default InputCommon;
