import { CardLarge } from "./common/CardLarge";
import { CardSmall } from "./common/CardSmall";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DummyData = [
  {
    title: "作品Ａ",
    author: "作者Ａ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "冒險",
    likeis: "17,000",
    color: "sky-400 ",
    card: "small",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "戀愛",
    likeis: "31,000",
    color: "red-400 ",
    card: "small",
  },
  {
    title: "作品Ｃ",
    author: "作者Ｃ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "生活",
    likeis: "34,000",
    color: "green-400 ",
    card: "small",
  },
  {
    title: "作品Ｄ",
    author: "作者Ｄ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "恐怖",
    likeis: "9,000",
    color: "indigo-400 ",
    card: "slarge",
  },
  {
    title: "作品Ｅ",
    author: "作者Ｅ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "冒險",
    likeis: "8,900",
    color: "sky-400 ",
    card: "small",
  },
  {
    title: "作品Ｆ",
    author: "作者Ｆ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "恐怖",
    likeis: "7,000",
    color: "indigo-400 ",
    card: "small",
  },
  {
    title: "作品Ｇ",
    author: "作者Ｇ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "愛情",
    likeis: "79,000",
    color: "red-400 ",
    card: "small",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "校園",
    likeis: "189,000",
    color: "violet-400 ",
    card: "large",
  },
];

export const Scroll = () => {
  return (
    <div className="m-auto h-[362px] max-w-[1110px]">
      <h2 className="text-xl font-semibold text-center pt-8 pb-6">新作推薦</h2>
      <div className="relative flex items-center">
        <FiChevronLeft className="absolute top-[85px] left-0 xl:-left-[50px] h-[50px] w-[50px] z-[100] opacity-30 hover:opacity-100" />
        <ul
          id="scroll"
          className="h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth flex scrollbar-hide"
        >
          {DummyData.map((item, i) => {
            return item.card === "small" ? (
              <CardSmall
                key={i}
                title={item.title}
                author={item.author}
                synopsis={item.synopsis}
                type={item.type}
                likeis={item.likeis}
                textColor={"text-" + item.color}
                bgColor={"bg-" + item.color}
                styles="mr-[16px]"
              />
            ) : (
              <CardLarge
                key={i}
                title={item.title}
                author={item.author}
                synopsis={item.synopsis}
                type={item.type}
                likeis={item.likeis}
                textColor={"text-" + item.color}
                bgColor={"bg-" + item.color}
                styles="mr-[16px]"
              />
            );
          })}
        </ul>
        <FiChevronRight className="absolute top-[85px] right-0 xl:-right-[50px] h-[50px] w-[50px] z-[100] opacity-30 hover:opacity-100" />
      </div>
    </div>
  );
};
