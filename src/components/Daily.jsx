import { CardSmall } from "./common/CardSmall";

const dummyData = [
  {
    title: "作品Ａ",
    author: "作者Ａ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "冒險",
    likeis: "17,000",
    color: "sky-400 ",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "戀愛",
    likeis: "31,000",
    color: "red-400 ",
  },
  {
    title: "作品Ｃ",
    author: "作者Ｃ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "生活",
    likeis: "34,000",
    color: "green-400 ",
  },
  {
    title: "作品Ｄ",
    author: "作者Ｄ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "恐怖",
    likeis: "9,000",
    color: "indigo-400 ",
  },
  {
    title: "作品Ｅ",
    author: "作者Ｅ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "冒險",
    likeis: "8,900",
    color: "sky-400 ",
  },
  {
    title: "作品Ｆ",
    author: "作者Ｆ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "恐怖",
    likeis: "7,000",
    color: "indigo-400 ",
  },
  {
    title: "作品Ｇ",
    author: "作者Ｇ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "愛情",
    likeis: "79,000",
    color: "red-400 ",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "校園",
    likeis: "189,000",
    color: "violet-400 ",
  },
  {
    title: "作品Ｉ",
    author: "作者Ｉ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "搞笑",
    likeis: "19,000",
    color: "lime-400 ",
  },
  {
    title: "作品Ｊ",
    author: "作者Ｊ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "冒險",
    likeis: "3,000",
    color: "sky-400 ",
  },
];

const weekday = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];

export const Daily = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-white">
          <ul className="flex m-auto justify-center items-center max-w-[1100px] px-[2%]">
            {weekday.map((day, i) => {
              return (
                <li
                  key={i}
                  className="flex justify-center items-center text-xl font-medium h-[62px] w-[12%] hover:text-teal-500"
                >
                  <a href="#">{day}</a>
                </li>
              );
            })}
            <span className="hidden sm:inline-block border-solid border-l border-gray-300 h-5 ml-[3%]"></span>
            <li className="hidden sm:flex justify-center items-center text-md font-medium text-gray-400 hover:text-teal-500 h-[62px] w-[120px]">
              <a href="#">查看更多</a>
            </li>
          </ul>
        </div>
        <div className="m-auto max-w-[1110px]">
          <ul className="flex flex-wrap justify-center gap-[15px] lgs:justify-between my-5">
            {dummyData.map((item, i) => {
              return (
                <CardSmall
                  key={i}
                  title={item.title}
                  author={item.author}
                  synopsis={item.synopsis}
                  type={item.type}
                  likeis={item.likeis}
                  textColor={"text-" + item.color}
                  bgColor={"bg-" + item.color}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};