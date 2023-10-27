import { Card } from "./common/Card";

const dummyData = [
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

export const Cards = () => {
  return (
    <div>
      <ul className="flex flex-wrap">
        {dummyData.map((item, i) => {
          return (
            <Card
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
  );
};
