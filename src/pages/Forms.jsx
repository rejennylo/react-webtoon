import { useState } from "react";
import { InputEpisode } from "../components/InputEpisode";
import { Button } from "../components/common/Button";
import { InputComic } from "../components/inputCoimc";


export const Forms = () => {
  const[formIndex,setFormIndex]=useState(0)
  const forms = [<InputComic />,<InputEpisode />]
  return (
    <div className="m-auto w-2/3">
      <div className="flex flex-wrap mt-7">
        <Button text="新增漫畫" onClick={() => setFormIndex(0)} />
        <Button text="新增章節" onClick={() => setFormIndex(1)} />
      </div>
      {forms[formIndex]}
    </div>
  );
};
