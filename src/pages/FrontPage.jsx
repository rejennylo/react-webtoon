import { CardSmall } from "./../components/common/CardSmall";

const DummyData = [
  {
    title: "作品Ａ",
    author: "作者Ｂ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ａ",
    likeis: "7,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ａ",
    author: "作者Ｂ",
    synopsis: "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ａ",
    likeis: "7,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
  {
    title: "作品Ｂ",
    author: "作者Ｂ",
    synopsis:
      "簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介簡介",
    type: "Ｂ",
    likeis: "89,000",
  },
];

const weekday = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];

export const FrontPage = () => {
  return (
    <>
      {/* main daily wrap -start */}
      <div>
        {/* daily tab wrap -start */}
        <div className="bg-white">
          <ul className="flex justify-end items-center m-auto xl:w-[1110px]">
            {weekday.map((day, i) => {
              return (
                <li
                  key={i}
                  className="flex justify-center items-center text-xl font-medium h-[62px] w-[120px] hover:text-teal-500"
                >
                  <a href="#">{day}</a>
                </li>
              );
            })}
            <span className="inline-block border-solid border-l border-gray-300 h-5 ml-10"></span>
            <li className="flex justify-center items-center text-md font-medium text-gray-400 hover:text-teal-500 h-[62px] w-[120px]">
              <a href="#">查看更多</a>
            </li>
          </ul>
        </div>
        {/* daily tab wrap -end */}
        {/* card list -start */}
        <div className="m-auto xl:w-[1110px]">
          <ul className="flex flex-wrap justify-center lg:justify-between xl:justify-between gap-3 my-5">
            {DummyData.map((item, i) => {
              return (
                <CardSmall
                  key={i}
                  title={item.title}
                  author={item.author}
                  synopsis={item.synopsis}
                  type={item.type}
                  likeis={item.likeis}
                />
              );
            })}
          </ul>
        </div>
      </div>
      {/* card list -end */}
      {/* new -start */}
      <div>
        <div className="m-auto xl:w-[1110px]">
          <h2 className="text-xl font-semibold text-center">新作推薦</h2>
          <ul className="flex flex-wrap justify-center lg:justify-between xl:justify-between gap-3 my-5">
            {DummyData.map((item, i) => {
              return (
                <CardSmall
                  key={i}
                  title={item.title}
                  author={item.author}
                  synopsis={item.synopsis}
                  type={item.type}
                  likeis={item.likeis}
                />
              );
            })}
          </ul>
        </div>
      </div>
      {/* new -end */}
      {/* genres -start */}
      <div>
        <div className="m-auto xl:w-[1110px]">
          <h2 className="text-xl font-semibold text-center">分類</h2>
          <ul className="flex flex-wrap justify-center lg:justify-between xl:justify-between gap-3 my-5">
            {DummyData.map((item, i) => {
              return (
                <CardSmall
                  key={i}
                  title={item.title}
                  author={item.author}
                  synopsis={item.synopsis}
                  type={item.type}
                  likeis={item.likeis}
                />
              );
            })}
          </ul>
        </div>
      </div>
      {/* genres -end */}
      {/* ranking -start */}

      {/* ranking -end */}
      {/* main daily wrap -end */}
    </>
  );
};
