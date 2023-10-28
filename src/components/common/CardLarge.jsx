import comicImg from "../../assets/dummy/501_PC_Big_Card.jpg";

export const CardLarge = ({ title, author, synopsis, type, likeis }) => {
  return (
    <li className="flex list-none h-[210px] w-[435px] relative">
      <a href="#" className="h-full w-full">
        <div className="h-full w-full">
          {/* card front */}
          <div>
            <img
              src={comicImg}
              alt="comic image"
              className="overflow-clip absolute z-[-1]"
            />
            {/* info */}
            <div className="p-3">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="flex py-1">
                <span className="inline-block mt-[7px] mr-[5px] ml-[2px] h-[11px] w-[13px] bg-icons [background-position-x:-1300px] [background-position-y:-672px]"></span>
                <span className="list-none text-md text-teal-500">
                  {likeis}
                </span>
              </p>
              <p>
                <span className="inline-block rounded-full h-8 w-8 text-xs text-center leading-8 bg-teal-500 text-white font-semibold mr-1">
                  更新
                </span>
                <span className="inline-block rounded-full h-8 w-8 text-xs text-center leading-8 bg-black text-teal-500 font-semibold mr-1">
                  新作
                </span>
                <span className="inline-block rounded-full h-8 w-8 text-xs text-center leading-8 bg-teal-500 text-white font-semibold mr-1">
                  暫停
                </span>
              </p>
            </div>
            <span className="absolute text-sm left-0 bottom-0 pb-3 pl-3">
              {type}
            </span>
          </div>
          {/* card back */}
          <div className="hidden h-full w-full bg-red-400">
            {/* info */}
            <div className="p-3">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <div className="py-1 flex flex-col">
                <p className="text-sm text-white">{author}</p>
                <span className="border-solid border-b border-gray-300 w-4 mt-2 mb-3"></span>
                <p className="text-xs text-white">{synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};