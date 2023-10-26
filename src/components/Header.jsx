import search from "../assets/magnifying-glass.svg";

export const Header = () => {
  const navItems = ["正式連載", "分類", "人氣排行榜", "投稿新星專區"];
  return (
    <header>
      <div className="flex mx-auto items-center max-w-screen-xl relative pl-5">
        <h1>
          <a href="#"></a>
        </h1>
        <ul className="flex items-center my-8 absolute right-0 mr-5">
          <li className="flex justify-center items-center border-solid border-2 rounded-full ml-3 h-9 w-28 bg-gray-800 hover:bg-black">
            <a href="#" className="text-sm text-white">
              上傳作品
            </a>
          </li>
          <li className="flex justify-center items-center border-solid border border-gray-300 rounded-full ml-3 h-9 w-28 bg-white">
            <a href="#" className="text-sm text-gray-500">
              登入
            </a>
          </li>
          <span className="border-solid border-l border-gray-300 ml-3 h-5"></span>
          <li className="flex justify-center items-center border-solid border border-gray-300 rounded-full ml-3 h-9 w-9 bg-white">
            <img
              src={search}
              alt="search"
              className="inline-block w-[12px] text-gray-400"
            />
          </li>
        </ul>
        <div className="hidden flex items-center justify-between my-8 absolute right-0 border-solid border border-gray-300 rounded-full ml-3 h-9 w-[330px] px-3 mr-5 bg-white">
          <span className="inline-block">
            <input
              type="text"
              placeholder="搜尋漫畫或作者"
              className="focus:outline-none text-xs"
            />
          </span>
          <span className="inline-block ">
            <span className="border-solid border-l border-gray-300 h-5"></span>
            <img
              src={search}
              alt="search"
              className="inline-block w-[12px] ml-4 text-gray-400"
            />
            <a href="#" className=" text-sm text-gray-600 ml-3">
              關閉
            </a>
          </span>
        </div>
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
      </div>
    </header>
  );
};
