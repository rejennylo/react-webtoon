import comicImg from "../../assets/dummy/4510x510.jpg";

const stateIcons = [
  { id: 1, state: "更新", text: "text-white ", bg: "bg-teal-500 " },
  { id: 2, state: "新作", text: "text-teal-500 ", bg: "bg-black " },
  { id: 3, state: "暫停", text: "text-white ", bg: "bg-teal-500 " },
];

export const CardSmall = ({ title, author, synopsis, type, likeis, textColor, bgColor }) => {
  console.log(textColor)
  console.log(bgColor)
  return (
    <li className="card-s flex list-none h-[210px] w-[210px] relative">
      <a href="#" className="h-full w-full">
        <div className="h-full w-full relative z-10">
          <div className="card_front">
            <div className="info p-3">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="flex py-1">
                <span className="inline-block mt-[7px] mr-[5px] ml-[2px] h-[11px] w-[13px] bg-icons [background-position-x:-1300px] [background-position-y:-672px]"></span>
                <span className="list-none text-md text-teal-500">
                  {likeis}
                </span>
              </p>
              <p>
                {stateIcons.map((icon) => {
                  return (
                    <span
                      key={icon.id}
                      className={`${icon.text + icon.bg}
                        inline-block rounded-full h-8 w-8 text-xs text-center leading-8 font-semibold mr-1`}
                    >
                      {icon.state}
                    </span>
                  );
                })}
              </p>
            </div>
            <span
              className={`absolute text-sm left-0 bottom-0 pb-3 pl-3 ${textColor}`}
            >
              {type}
            </span>
          </div>
          <div
            className={`card-back opacity-0 hover:opacity-100 h-full w-full absolute top-0 ${bgColor}`}
          >
            <div className="info p-3">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <div className="py-1 flex flex-col">
                <p className="text-sm text-white">{author}</p>
                <span className="border-solid border-b border-gray-300 w-4 mt-2 mb-3"></span>
                <p className="text-xs text-white">{synopsis}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={comicImg}
          alt="comic image"
          className="overflow-clip absolute top-0"
        />
      </a>
    </li>
  );
};
