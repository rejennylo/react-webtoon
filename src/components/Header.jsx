import { useState } from "react";

export const Header = () => {
  const navItems = ["正式連載", "分類", "人氣排行榜", "投稿新星專區"];
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  
  return (
    <>
      {/* header -start */}
      <header>
        <input
          type="checkbox"
          id="menu_control"
          className="absolute top-0 z-[-10]"
        />
        <div className="flex m-auto items-center max-w-[1360px] relative py-4 bg-white">
          <h1 className="z-10">
            <a
              href="#"
              className="inline-block h-[74px] w-[77px] lg:mr-10 ml-5 bg-icons [background-position-x:-1180px] [background-position-y:-505px]"
            ></a>
          </h1>
          <label
            htmlFor="menu_control"
            className="absolute right-0 mr-5 h-[48px] w-[52px] before:absolute before:h-[6px] before:w-full before:bg-gray-500 before:top-0 before:bottom-0 before:m-auto before:shadow-[0_14px_0_rgba(107,114,128,1),0_-14px_0_rgba(107,114,128,1)] lg:hidden z-10"
          ></label>
          {/* nav -start */}
          <nav className="absolute top-[-350px] mt-24 pb-3 lg:mt-0 h-auto w-full lg:w-auto bg-white lg:bg-transparent lg:relative lg:top-0 items-center z-9">
            <ul className="flex flex-col lg:flex-row items-center">
              {navItems.map((item, index) => (
                <li key={index} className="m-3 lg:pr-4 lg:first:pl-0">
                  <a
                    href="#"
                    className="text-xl inline-block font-medium hover:text-teal-500"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <span className="hidden lg:block lg:border-solid lg:border-l lg:border-gray-300 ml-2 h-10"></span>
              <li className="m-3 lg:px-4 lg:first:pl-0 lg:hidden">
                <a
                  href="#"
                  className="text-xl inline-block font-medium text-gray-500 hover:text-teal-500"
                >
                  登入
                </a>
              </li>
            </ul>
          </nav>
          {/* nav -end */}
          {/* right -start */}
          <ul className="hidden lg:absolute lg:flex lg:flex-row items-center lg:my-8 lg:right-0 lg:mr-5">
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
            <span className="hidden lg:block lg:border-solid lg:border-l lg:border-gray-300 lg:ml-3 lg:h-5"></span>
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
      {/* header -end */}
    </>
  );
};
