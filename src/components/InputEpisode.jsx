import { useState } from "react";
import { DataInput } from "./common/DataInput";
import { Button } from "./common/Button";

const inputData = [
  { id: 1, name: "titleNo", type: "text", title: "作品編號" },
  { id: 2, name: "noticeInfo", type: "text", title: "作品公告" },
  { id: 3, name: "episodeNo", type: "text", title: "話次編號" },
  { id: 4, name: "episodeTitle", type: "text", title: "標題" },
  { id: 5, name: "thumbnail", type: "text", title: "縮圖" },
  { id: 6, name: "update", type: "text", title: "更新日期" },
];

export const InputEpisode = () => {
    const [episodeData, setEpisodeData] = useState({});

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      const updatedValue = type === "checkbox" ? checked : value;

      setEpisodeData((prev) => {
        return {
          ...prev,
          [name]: updatedValue,
        };
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert("成功送出");
      console.log(episodeData);
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
              value={episodeData[item.name] || ""}
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
