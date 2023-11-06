import { useRef } from "react";
import { CardLg } from "./common/CardLg";
import { CardSm } from "./common/CardSm";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const dummyData = [
  {
    title: "作品Ａ",
    author: "作者Ａ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "冒險",
    likeis: "17,000",
    textColor: "text-red-400",
    bgColor: "bg-red-400",
    newRelease: true,
    update: true,
    hiatus: false,
    completed: false,
    card: "small",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "戀愛",
    likeis: "31,000",
    textColor: "text-sky-400",
    bgColor: "bg-sky-400",
    newRelease: true,
    update: false,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｃ",
    author: "作者Ｃ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "生活",
    likeis: "34,000",
    textColor: "text-green-400",
    bgColor: "bg-green-400",
    newRelease: false,
    update: false,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｄ",
    author: "作者Ｄ",
    image: "../../src/assets/dummy/501_PC_Big_Card.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "恐怖",
    likeis: "9,000",
    textColor: "text-sky-400",
    bgColor: "bg-sky-400",
    newRelease: false,
    update: false,
    hiatus: true,
    completed: false,
    size: "slarge",
  },
  {
    title: "作品Ｅ",
    author: "作者Ｅ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "冒險",
    likeis: "8,900",
    textColor: "text-red-400",
    bgColor: "bg-red-400",
    newRelease: true,
    update: false,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｆ",
    author: "作者Ｆ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "恐怖",
    likeis: "7,000",
    textColor: "text-sky-400",
    bgColor: "bg-sky-400",
    newRelease: false,
    update: true,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｇ",
    author: "作者Ｇ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "愛情",
    likeis: "79,000",
    textColor: "text-sky-400",
    bgColor: "bg-sky-400",
    newRelease: false,
    update: true,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    image: "../../src/assets/dummy/501_PC_Big_Card.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "校園",
    likeis: "189,000",
    textColor: "text-red-400",
    bgColor: "bg-red-400",
    newRelease: true,
    update: false,
    hiatus: false,
    completed: false,
    size: "large",
  },
];

export const IsNew = () => {
  const scrollRef = useRef(null);

  const handelScroll = (direction) => {
    const scrollAmount = 1120;

    direction === "left"
      ? (scrollRef.current.scrollLeft -= scrollAmount)
      : (scrollRef.current.scrollLeft += scrollAmount);
  };

  return (
    <div className="bg-gray-100 border-b border-solid border-gray-200 px-[6%] lg:px-0">
      <div className="m-auto h-[362px] max-w-[1110px]">
        <h2 className="text-xl font-semibold text-center pt-8 pb-6">
          新作推薦
        </h2>
        <div className="relative flex items-center">
          <FiChevronLeft
            onClick={() => handelScroll("left")}
            className="absolute top-[85px] left-0 xl:-left-[50px] h-[50px] w-[50px] z-[100] opacity-30 hover:opacity-100"
          />
          <div
            id="scroll"
            ref={scrollRef}
            className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <div className="inline-block">
              <ul className="w-[1110px] flex justify-between">
                {dummyData.slice(0, 4).map((item, i) => {
                  const props = {
                    key: i,
                    title: item.title,
                    author: item.author,
                    image: item.image,
                    synopsis: item.synopsis,
                    genre: item.genre,
                    likeis: item.likeis,
                    textColor: item.textColor,
                    bgColor: item.bgColor,
                    newRelease: item.newRelease,
                    update: item.update,
                    hiatus: item.hiatus,
                    completed: item.completed,
                  };
                  return item.size === "small" ? (
                    <CardSm {...props} />
                  ) : (
                    <CardLg {...props} />
                  );
                })}
              </ul>
            </div>
            <div className="inline-block">
              <ul className="w-[1110px] flex justify-between">
                {dummyData.slice(4, 8).map((item, i) => {
                  const props = {
                    key: i,
                    title: item.title,
                    author: item.author,
                    image: item.image,
                    synopsis: item.synopsis,
                    genre: item.genre,
                    likeis: item.likeis,
                    textColor: item.textColor,
                    bgColor: item.bgColor,
                    newRelease: item.newRelease,
                    update: item.update,
                    hiatus: item.hiatus,
                    completed: item.completed,
                  };
                  return item.size === "small" ? (
                    <CardSm {...props} />
                  ) : (
                    <CardLg {...props} />
                  );
                })}
              </ul>
            </div>
          </div>
          <FiChevronRight
            onClick={() => handelScroll("right")}
            className="absolute top-[85px] right-0 xl:-right-[50px] h-[50px] w-[50px] z-[100] opacity-30 hover:opacity-100"
          />
          <div className="absolute -bottom-6 left-[49%] flex">
            <FaCircle className="h-3 w-3 mr-1" />
            <FaCircle className="h-3 w-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
