import { useState } from "react";

export const Header = () => {
  const navItems = ["正式連載", "分類", "人氣排行榜", "投稿新星專區"];
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className="relative z-[100]">
        <div className="relative lgs:flex items-center m-auto max-w-[1360px]">
          <input type="checkbox" id="nav_control" className="peer/nav_control" />
        <h1>
          <a
            href="#"
            className="inline-block h-[74px] w-[77px] mt-2 ml-3 bg-icons [background-position-x:-1180px] [background-position-y:-505px]"
          ></a>
        </h1>
        <label
          htmlFor="nav_control"
          className="absolute block lgs:hidden w-[42px] h-[30px] top-0 right-0 mt-[28px] mr-3 hamburger_icon"
        ></label>
        <nav className="absolute w-full lgs:relative lgs:w-[600px] nav_off nav_on lgs:scale-y-100 lgs:opacity-100">
          <ul className="flex flex-col lgs:flex-row items-center bg-white">
            {navItems.map((item, i) => {
              return (
                <li
                  key={i}
                  className="first:mt-3 mb-3 lgs:first:mt-0 lgs:mb-0 first:lgs:ml-10 lgs:mr-10"
                >
                  <a
                    href="#"
                    className="text-xl inline-block font-medium hover:text-teal-500"
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
          {/* right -start */}
          <ul className="hidden lgs:absolute lgs:flex lgs:flex-row items-center lgs:my-8 lgs:right-0 lgs:mr-5">
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
            <span className="hidden lgs:block lgs:border-solid lgs:border-l lgs:border-gray-300 lgs:ml-3 lgs:h-5"></span>
            <li
              className="flex justify-center items-center ml-3"
              onClick={toggleSearch}
            >
              <a
                href="#"
                className="bg-icons [background-position-x:-37px] [background-position-y:-1220px] h-[33px] w-[33px]"
              ></a>
            </li>
          </ul>
          {/* right -end */}
          {/* search -start */}
          <div
            className={
              isSearchOpen
                ? "flex items-center justify-between my-8 absolute right-0 border-solid border border-gray-300 rounded-full ml-3 h-[33px] w-[330px] px-3 mr-5 bg-white"
                : "hidden"
            }
          >
            <span className="inline-block">
              <input
                type="text"
                placeholder="搜尋漫畫或作者"
                className="focus:outline-none text-xs"
              />
            </span>
            <span className="flex items-center" onClick={toggleSearch}>
              <span className="border-solid border-l border-gray-300 h-5"></span>
              <li className=" flex justify-center items-center ml-3">
                <a
                  href="#"
                  className="bg-icons [background-position-x:-1300px] [background-position-y:-608px] h-[12px] w-[12px]"
                ></a>
              </li>
              <a href="#" className=" text-sm text-gray-600 ml-3">
                關閉
              </a>
            </span>
          </div>
          {/* search -end */}
        </div>
      </header>
    </>
  );
};
