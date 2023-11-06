import { useRef, useState } from "react";
import { CardXs } from "./common/CardXs";
import { FiChevronRight, FiCheck } from "react-icons/fi";

const dummyData = [
  {
    title: "作品Ａ",
    author: "作者Ａ",
    genre: "奇幻冒險",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    genre: "台灣原創作品",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｃ",
    author: "作者Ｃ",
    genre: "驚悚 / 恐怖",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｄ",
    author: "作者Ｄ",
    genre: "愛情",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｅ",
    author: "作者Ｅ",
    genre: "奇幻冒險",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｆ",
    author: "作者Ｆ",
    genre: "愛情",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｇ",
    author: "作者Ｇ",
    genre: "台灣原創作品",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    genre: "奇幻冒險",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    genre: "驚悚 / 恐怖",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    genre: "奇幻冒險",
    imagexs: "../../src/assets/dummy/320230315-_______thumb_M_240x254.png",
  },
];

export const Ranking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isCheckRef = useRef("全部");
  const sorts = ["全部", "愛情", "奇幻冒險", "驚悚 / 恐怖", "台灣原創作品"];

  const toggleMenu = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSortClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);

    const checkedSort = event.currentTarget.textContent;
    isCheckRef.current =
      checkedSort === isCheckRef.current ? isCheckRef.current : checkedSort;
  };

  return (
    <div className="ranking-wrap px-[6%]">
      <div className="ranking-container max-w-[1110px] m-auto py-10 flex gap-[6%]">
        <div className="right-area w-full">
          <div className="flex items-center mb-2">
            <h2 className="flex items-center">
              <a href="#" className="text-xl font-semibold">
                熱門新作排行榜
              </a>
              <FiChevronRight className="h-7 w-7" />
            </h2>
          </div>
          <ul>
            {dummyData.slice(0, 5).map((item, i) => {
              return (
                <CardXs
                  key={i}
                  title={item.title}
                  author={item.author}
                  genre={item.genre}
                  number={i + 1}
                  image={item.imagexs}
                />
              );
            })}
          </ul>
        </div>
        <div className="left-area w-full">
          <div className="flex items-center justify-between mb-2">
            <h2 className="flex items-center">
              <a href="#" className="text-xl font-semibold">
                分類排行榜
              </a>
              <FiChevronRight className="h-7 w-7" />
            </h2>
            <div className="sort-area font-medium text-gray-400 relative">
              <a href="#" className="flex items-center" onClick={toggleMenu}>
                {isCheckRef.current}
                <FiCheck className="h-6 w-6 ml-1" />
              </a>
              {isOpen && (
                <ul className="sort-list w-[170px] flex flex-col items-end p-4 gap-2 absolute -top-4 -right-4 border border-1 border-gray-400 bg-white z-10">
                  {sorts.map((sort, i) => {
                    return (
                      <li key={i}>
                        <a
                          href="#"
                          className="flex items-center"
                          onClick={handleSortClick}
                        >
                          <span>{sort}</span>
                          <span className="w-7">
                            {isCheckRef.current === sort && (
                              <FiCheck className=" h-6 w-6 ml-1" />
                            )}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <ul>
            {dummyData.slice(5, 11).map((item, i) => {
              return (
                <CardXs
                  key={i}
                  title={item.title}
                  author={item.author}
                  genre={item.genre}
                  number={i + 1}
                  image={item.imagexs}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
