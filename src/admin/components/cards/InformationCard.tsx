import { useState, type ReactNode } from "react";
import { CiEdit } from "react-icons/ci";
import { LuSave } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import Tooltip from "../../../components/tooltip/Tooltip";
import { formatCurrencyInput } from "../../../utils/tranforms/inputNumber";

interface IInformationCardProps {
  label?: string;
  defaultValue: string;
  onSubmit: (value: string) => void;
  helperText?: string;
  nodeValue?: string | ReactNode;
  valueType?: "string" | "number";
}
const InformationCard: React.FC<IInformationCardProps> = ({
  label,
  defaultValue,
  onSubmit,
  helperText,
  nodeValue,
  valueType = "string",
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(inputValue);
      setIsEdit(false);
    }
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (valueType === "number") {
      setInputValue(formatCurrencyInput.setState(e.target.value));
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="px-3 py-2 rounded-md shadow-md">
      <div className="flex items-center gap-x-1 justify-between">
        <div className="flex items-center gap-x-1">
          <p className="text-sm text-gray-600">{label}</p>
          {!isEdit && (
            <Tooltip title="Sửa">
              <CiEdit
                size={20}
                className="cursor-pointer text-blue-500"
                onClick={() => setIsEdit(true)}
              />
            </Tooltip>
          )}
        </div>

        {isEdit && (
          <div className="flex items-center gap-x-3">
            <Tooltip title="Lưu">
              <LuSave
                className="cursor-pointer text-blue-500"
                onClick={() => {
                  onSubmit(inputValue);
                  setIsEdit(false);
                }}
              />
            </Tooltip>
            <Tooltip title="Huỷ">
              <MdCancel
                className="cursor-pointer text-red-500"
                onClick={() => setIsEdit(false)}
              />
            </Tooltip>
          </div>
        )}
      </div>

      <div>
        {!isEdit ? (
          <p className="mt-2 text-dark font-medium">
            {nodeValue ||
              (valueType === "number"
                ? formatCurrencyInput.display(defaultValue)
                : defaultValue)}
          </p>
        ) : (
          <div className="w-full">
            <input
              type="text"
              autoFocus
              value={
                valueType === "number"
                  ? formatCurrencyInput.display(inputValue)
                  : inputValue
              }
              className="outline-none py-2 border-b hover:border-dark focus:border-blue-500 w-full text-dark"
              onChange={handleChangeInputValue}
              onKeyDown={handleKeyDown}
            />

            {helperText && (
              <p className="text-sm text-red-600 mt-1">{helperText}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InformationCard;
