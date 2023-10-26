import { useState } from "react";
import { DataInput } from "./common/DataInput";
import { Button } from "./common/Button";

const inputData = [
  { id: 1, name: "titleNo", type: "text", title: "作品編號" },
  { id: 2, name: "title", type: "text", title: "作品標題" },
  { id: 3, name: "writingAuthorNo", type: "text", title: "創作者編號" },
  { id: 4, name: "writingAuthorName", type: "text", title: "創作者名稱" },
  { id: 5, name: "synopsis", type: "text", title: "作品簡介" },
  { id: 6, name: "representGenreSeoCode", type: "text", title: "作品分類" },
  { id: 7, name: "weekday", type: "text", title: "固定更新日" },
  { id: 8, name: "totalLikeitCount", type: "text", title: "總 like 數" },
  { id: 9, name: "totalReadCount", type: "text", title: "總觀看數" },
  { id: 10, name: "starScoreAverage", type: "text", title: "平均評分" },
  { id: 11, name: "totalFavoriteCount", type: "text", title: "總蒐藏數" },
  { id: 12, name: "hoverBackgroudColor", type: "text", title: "背景色" },
  { id: 13, name: "newRelease", type: "checkbox", title: "是否為當月新作" },
  { id: 14, name: "ongoing", type: "checkbox", title: "是否正在連載中" },
  { id: 15, name: "completed", type: "checkbox", title: "是否完結" },
];

export const InputComic = () => {
  const [comicData, setComicData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setComicData((prev) => {
      return {
        ...prev,
        [name]: updatedValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("成功送出");
    console.log(comicData);
  };

  return (
    <form className="m-auto">
      <div className="flex flex-wrap py-10">
        {inputData.map((item) => {
          return (
            <DataInput
              key={item.id}
              title={item.title}
              type={item.type}
              name={item.name}
              value={comicData[item.name] || ""}
              onChange={handleChange}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center">
        <Button text="送出" onClick={handleSubmit} />
      </div>
    </form>
  );
};
