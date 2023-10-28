import search from "../assets/magnifying-glass.svg";

export const Header = () => {
  const navItems = ["正式連載", "分類", "人氣排行榜", "投稿新星專區"];
  return (
    <>
      {/* header -start */}
      <header>
        <div className="flex m-auto items-center xl:max-w-[1700px] relative pl-5">
          <h1>
            <a
              href="#"
              className="inline-block h-[74px] w-[77px] mr-10 bg-icons [background-position-x:-1180px] [background-position-y:-505px]"
            ></a>
          </h1>
          {/* right -start */}
          <ul className="flex items-center my-8 absolute right-0 mr-5">
            <li className="flex justify-center items-center rounded-full ml-3 h-[33px] w-28 bg-gray-800 hover:bg-black">
              <a
                href="#"
                className="text-center leading-[33px] w-full text-sm text-white"
              >
                上傳作品
              </a>
            </li>
            <li className="flex justify-center items-center border-solid border border-gray-300 rounded-full ml-3 h-[33px] w-28 bg-white">
              <a
                href="#"
                className="text-center leading-[33px] w-full text-sm text-gray-500"
              >
                登入
              </a>
            </li>
            <span className="border-solid border-l border-gray-300 ml-3 h-5"></span>
            <li className="flex justify-center items-center ml-3">
              <a
                href="#"
                className="bg-icons [background-position-x:-37px] [background-position-y:-1220px] h-[33px] w-[33px]"
              ></a>
            </li>
          </ul>
          {/* right -end */}
          {/* search -start */}
          <div className="hidden flex items-center justify-between my-8 absolute right-0 border-solid border border-gray-300 rounded-full ml-3 h-[33px] w-[330px] px-3 mr-5 bg-white">
            <span className="inline-block">
              <input
                type="text"
                placeholder="搜尋漫畫或作者"
                className="focus:outline-none text-xs"
              />
            </span>
            <span className="flex items-center">
              <span className="border-solid border-l border-gray-300 h-5"></span>
              <li className=" flex justify-center items-center ml-3">
                <a
                  href="#"
                  className="bg-icons [background-position-x:-37px] [background-position-y:-1220px] h-[33px] w-[33px]"
                ></a>
              </li>
              <a href="#" className=" text-sm text-gray-600 ml-3">
                關閉
              </a>
            </span>
          </div>
          {/* search -end */}
          {/* nav -start */}
          <ul className="flex items-center my-8">
            {navItems.map((item, index) => (
              <li key={index} className={index === 0 ? "pr-4" : "px-4"}>
                <a
                  href="#"
                  className="text-xl display: inline-block font-medium hover:text-teal-500"
                >
                  {item}
                </a>
              </li>
            ))}
            <span className="border-solid border-l border-gray-300 ml-5 h-10"></span>
          </ul>
          {/* nav -end */}
        </div>
      </header>
      {/* header -end */}
    </>
  );
};
