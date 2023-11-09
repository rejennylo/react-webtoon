import { CardLg } from "./common/CardLg";
import { CardSm } from "./common/CardSm";

const dummyData = [
  {
    title: "作品Ａ",
    author: "作者Ａ",
    image: "../../src/assets/dummy/501_PC_Big_Card.jpg",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "冒險",
    likeis: "17,000",
    textColor: "text-red-400",
    bgColor: "bg-red-400",
    newRelease: true,
    todayUp: true,
    hiatus: false,
    completed: false,
    size: "large",
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
    todayUp: false,
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
    todayUp: false,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｄ",
    author: "作者Ｄ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "恐怖",
    likeis: "9,000",
    textColor: "text-sky-400",
    bgColor: "bg-sky-400",
    newRelease: false,
    todayUp: false,
    hiatus: true,
    completed: false,
    size: "small",
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
    todayUp: false,
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
    todayUp: true,
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
    todayUp: true,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｈ",
    author: "作者Ｈ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "校園",
    likeis: "189,000",
    textColor: "text-red-400",
    bgColor: "bg-red-400",
    newRelease: true,
    todayUp: false,
    hiatus: false,
    completed: false,
    size: "small",
  },
  {
    title: "作品Ｉ",
    author: "作者Ｉ",
    image: "../../src/assets/dummy/4510x510.jpg",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    genre: "校園",
    likeis: "189,000",
    textColor: "text-green-400",
    bgColor: "bg-green-400",
    newRelease: false,
    todayUp: true,
    hiatus: false,
    completed: false,
    size: "small",
  },
];

const weekday = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];

export const Daily = () => {
  return (
    <div className="bg-gray-100 border-b border-solid border-gray-200">
      <div className="flex flex-col w-full">
        <div className="bg-white">
          <ul className="m-auto max-w-[1110px] flex justify-between items-center px-[2%]">
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
        <div className="w-full px-[6%] lg:px-0">
          <div className="m-auto max-w-[1110px]">
            <ul className="flex flex-wrap justify-center gap-[15px] lgs:justify-between">
              {dummyData.map((item, i) => {
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
                  todayUp: item.todayUp,
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
      </div>
    </div>
  );
};
