import { CardGenre } from "./common/CardGenre";
import { CardSm } from "./common/CardSm";

const dummyData = [
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
    title: "作品Ｉ",
    author: "作者Ｉ",
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
    title: "作品Ｊ",
    author: "作者Ｊ",
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
];

export const Genres = () => {
  return (
    <div className="bg-gray-100 border-b border-solid border-gray-200 px-[6%] lg:px-0">
      <div className="m-auto max-w-[1110px] py-10">
        <h2 className="text-xl font-semibold text-center pb-6">分類</h2>
        <ul className="flex flex-wrap justify-center gap-[15px] lgs:justify-between">
          <CardGenre
            genre="校園"
            info="介紹～～～～～～～～～～～～～～～～～"
            bgColor="bg-sky-400"
          />
          {dummyData.slice(0, 4).map((item, i) => {
            return (
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
            );
          })}
          <CardGenre
            genre="台灣原創漫畫"
            info="介紹～～介紹～～～～～～～～～～～～～～～"
            bgColor="bg-green-400"
          />
          {dummyData.slice(4, 8).map((item, i) => {
            return (
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
            );
          })}
        </ul>
      </div>
    </div>
  );
};
