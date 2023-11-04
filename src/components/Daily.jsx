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
    update: true,
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
    image: "../../src/assets/dummy/4510x510.jpg",
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
    image: "../../src/assets/dummy/4510x510.jpg",
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
    update: true,
    hiatus: false,
    completed: false,
    size: "small",
  },
];

const weekday = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];

export const Daily = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <ul className="flex m-auto justify-center items-center max-w-[1110px] px-[2%]">
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
      <div className="bg-gray-100 border-b border-solid border-gray-200">
        <ul className="m-auto max-w-[1110px] flex flex-wrap justify-center gap-3 lgs:justify-between my-5">
          {dummyData.map((item, i) => {
            return item.size === "small" ? (
              <CardSm
                key={i}
                title={item.title}
                author={item.author}
                image={item.image}
                synopsis={item.synopsis}
                genre={item.genre}
                likeis={item.likeis}
                textColor={item.textColor}
                bgColor={item.bgColor}
                newRelease={item.newRelease}
                update={item.update}
                hiatus={item.hiatus}
                completed={item.completed}
              />
            ) : (
              <CardLg
                key={i}
                title={item.title}
                author={item.author}
                image={item.image}
                synopsis={item.synopsis}
                genre={item.genre}
                likeis={item.likeis}
                textColor={item.textColor}
                bgColor={item.bgColor}
                newRelease={item.newRelease}
                update={item.update}
                hiatus={item.hiatus}
                completed={item.completed}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
