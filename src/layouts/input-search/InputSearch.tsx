import React, { useEffect, useMemo, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseFill } from "react-icons/ri";
import { SEARCH_DATAS } from "../../datas/searchDatas";
import TruncateTextWithPopup from "../../components/handle-text/TruncateTextWithPopup";
import { Link } from "react-router-dom";

interface IInputSearchProps {
  toggleInputSearchOpen: () => void;
}

const InputSearch: React.FC<IInputSearchProps> = ({
  toggleInputSearchOpen,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(inputValue);
    }, 400);

    return () => clearTimeout(handler);
  }, [inputValue]);

  const resultList = useMemo(() => {
    return SEARCH_DATAS;
  }, [searchValue, SEARCH_DATAS]);

  const handleClose = () => {
    setInputValue("");
    setSearchValue("");
    toggleInputSearchOpen();
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[50px] bg-secondary">
      <input
        type="text"
        autoFocus
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        placeholder="Tìm kiếm..."
        className="caret-white block w-full pl-[60px] outline-none bg-secondary text-light   placeholder:text-sm placeholder:text-light"
      />
      <RiCloseFill
        onClick={handleClose}
        className="absolute ml-2 text-xl cursor-pointer right-4 sm:right-8 text-light"
      />
      <GrSearch className="absolute left-8 top-[50%] -translate-y-1/2 text-light" />

      {searchValue && (
        <div className="absolute top-[50px] z-[100] w-screen max-w-[1820px] bg-white shadow-md px-4 lg:px-6 2xl:px-10 py-2 lg-py-4 2xl:py-6">
          {resultList.length === 0 && (
            <p className="text-center text-gray-500">
              Không có kết quả phù hợp
            </p>
          )}

          {resultList.length !== 0 && (
            <div className="h-[60vh] max-h-[350px] overflow-y-auto">
              <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-6 lg:gap-x-12">
                {resultList.map((item, i) => (
                  <Link
                    to={item.path}
                    key={i}
                    className="flex items-start gap-4 group"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-20 h-20 rounded-md"
                      />
                    )}
                    <div className="flex flex-col gap-1">
                      <p className="cursor-pointer title-h6 group-hover:text-secondary">
                        {item.title}
                      </p>
                      <TruncateTextWithPopup>
                        {item.content}
                      </TruncateTextWithPopup>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
