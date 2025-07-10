import React, { useEffect, useMemo, useState, type RefObject } from "react";
import { GrSearch } from "react-icons/gr";
import { RiCloseFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TruncateTextWithPopup from "../../components/handle-text/TruncateTextWithPopup";
import type { ISearchDatas } from "../../datas/data.type";
import { SEARCH_DATAS } from "../../datas/searchDatas";

interface IInputSearchProps {
  toggleInputSearchOpen: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

const InputSearch: React.FC<IInputSearchProps> = ({
  toggleInputSearchOpen,
  inputRef,
}) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(inputValue);
    }, 400);

    return () => clearTimeout(handler);
  }, [inputValue]);

  const resultList = useMemo<ISearchDatas[]>(() => {
    const key = searchValue.toLocaleLowerCase().trim();

    // 1. Lọc theo title
    const titleMatches = SEARCH_DATAS.filter((item) =>
      item.title.toLocaleLowerCase().includes(key)
    );

    // 2. Lọc theo content (loại bỏ đã match title)
    const contentMatches = SEARCH_DATAS.filter(
      (item) =>
        !titleMatches.includes(item) &&
        String(item.content).toLocaleLowerCase().includes(key)
    );

    // 3. Lọc theo description (loại bỏ đã match title & content)
    const descMatches = SEARCH_DATAS.filter(
      (item) =>
        !titleMatches.includes(item) &&
        !contentMatches.includes(item) &&
        item.description?.toLocaleLowerCase().includes(key)
    );

    return [...titleMatches, ...contentMatches, ...descMatches];
  }, [searchValue, SEARCH_DATAS]);

  const handleClose = () => {
    setInputValue("");
    setSearchValue("");
    toggleInputSearchOpen();
  };

  const handleNavigate = (item: ISearchDatas) => {
    console.log(location.pathname);

    navigate(item.path, {
      state: {
        hash: item.sectionId,
        isFormOtherPage: location.pathname !== item.path,
      },
    });
    handleClose();
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[50px] bg-secondary">
      <input
        ref={inputRef}
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
            <div className="max-h-[350px] overflow-y-auto pb-10">
              <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-6 lg:gap-x-12">
                {resultList.map((item: ISearchDatas) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 group"
                    onClick={() => handleNavigate(item)}
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
                  </div>
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
