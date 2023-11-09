import {
  FaFacebookSquare,
  FaLine,
  FaCheckSquare,
  FaPlus,
  FaUserCheck,
} from "react-icons/fa";
import { AiOutlineHeart, AiFillEye, AiFillStar } from "react-icons/ai";

const dummyData = [
  {
    episodeTitle: "第一話",
    update: "2023/09/01",
    likeitCount: "12345",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第二話",
    update: "2023/09/12",
    likeitCount: "1234",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第三話",
    update: "2023/09/21",
    likeitCount: "123",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第三話",
    update: "2023/09/21",
    likeitCount: "123",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第三話",
    update: "2023/09/21",
    likeitCount: "123",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第三話",
    update: "2023/09/21",
    likeitCount: "123",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
  {
    episodeTitle: "第三話",
    update: "2023/09/21",
    likeitCount: "123",
    thumbnail:
      "../src/assets/dummy/thumb_16916724899099292_DOKJA_169_009_02.png",
  },
];

export const Table = () => {
  return (
    <div name="table-wrap" className="h-full w-full bg-gray-50">
      <div
        name="table-container"
        className="m-auto h-max-[240px] max-w-[1200px] bg-white"
      >
        <div name="table-header" className="relative">
          <div className="absolute top-0 h-full w-full flex flex-col justify-center">
            <div
              name="header-title"
              className="info flex flex-col items-center"
            >
              <h2 className="text-lg">類型</h2>
              <h1 className="text-2xl font-semibold">標題</h1>
              <p>作家</p>
            </div>
            <div
              name="header-sns-icons"
              className="sns absolute bottom-0 right-0"
            >
              <ul className="flex justify-end">
                <li>
                  <FaFacebookSquare className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] ml-3 text-teal-500" />
                </li>
                <li>
                  <FaLine className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] ml-3 text-teal-500" />
                </li>
                <li>
                  <FaCheckSquare className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px] ml-3 text-teal-500" />
                </li>
              </ul>
            </div>
          </div>
          <span name="header-img" className="max-h-[240px] max-w-[1200px]">
            <img
              className=" overflow-clip"
              src="../src/assets/dummy/E585A8E79FA5E8AE80E88085E8A696E8A792_E4BD9CE59381E9A0.png"
              alt="image"
            />
          </span>
        </div>
        <div
          name="table-main"
          className="flex flex-col-reverse lg:flex-row max-w-[1200px]"
        >
          <div
            name="list-wrap"
            className="lg:w-3/5 px-5 border-t lg:border-t-0 lg:border-r border-solid border-gray-200"
          >
            <div name="notice" className="flex items-center py-5">
              <span
                name="notice-icon"
                className="border border-solid rounded-full h-5 w-8 text-xs font-medium text-center text-gray-400 border-gray-400 mr-3"
              >
                通知
              </span>
              <p className="text-lg font-semibold">通知內容</p>
            </div>
            <ul name="list-ui">
              {dummyData.map((item, i) => {
                return (
                  <li key={i} className="hover:bg-gray-100 relative">
                    <a
                      href="#"
                      className="flex items-center justify-between before:h-[1px] before:w-full before:bg-gray-100 before:absolute before:top-0 before:shadow-[0_68px_0_rgba(209,213,219,1)]"
                    >
                      <span className="flex items-center">
                        <span className="w-[72px]">
                          <img src={item.thumbnail} alt="image" />
                        </span>
                        <span className="text-lg ml-3">
                          {item.episodeTitle}
                        </span>
                      </span>
                      <span className="flex items-center justify-between w-[35%]">
                        <span className="w-auto text-xs lg:text-sm text-gray-400">
                          {item.update}
                        </span>
                        <span className="flex items-center w-auto text-xs lg:text-sm text-gray-400">
                          <AiOutlineHeart className="text-gray-400 h-3 w-3" />
                          {item.likeitCount}
                        </span>
                        <span className="text-sm lg:text-md">#{i + 1}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <div name="paginate" className="flex justify-center py-5">
              <a href="#" className="h-[28px] w-[28px]">
                <span className="btn-page-on">1</span>
              </a>
              <a href="#" className="h-[28px] w-[28px]">
                <span className="btn-page">2</span>
              </a>
            </div>
          </div>
          <div
            name="aside-wrap"
            className="flex flex-col items-center lg:w-2/5 px-5 lg:px-[6%] py-5"
          >
            <ul name="grade_wrap" className="flex justify-between w-full pb-7">
              <li className="flex items-center">
                <AiFillEye className="h-5 w-5 mr-2 text-teal-500" />
                <span>總觀看數</span>
              </li>
              <li className="flex items-center">
                <FaUserCheck className="h-5 w-5 mr-2 text-teal-500" />
                <span>總蒐藏數</span>
              </li>
              <li className="flex items-center">
                <AiFillStar className="h-5 w-5 mr-2 text-teal-500" />
                <span>評分</span>
              </li>
            </ul>
            <div name="info" className="flex items-center justify-between lg:flex-col">
              <div className="w-1/2 lg:w-full">
                <span className="flex items-center pb-3">
                  <span
                    className={
                      "inline-block rounded-full h-8 w-8 text-xs font-semibold leading-8 text-center mr-[2%] text-white bg-teal-500"
                    }
                  >
                    更新
                  </span>
                  <p className="text-lg font-medium">在週四更新</p>
                </span>
                <p className="pb-3">
                  作品簡介～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
                </p>
              </div>
              <div className="w-2/5 lg:w-full">
                <a
                  href="#"
                  className="flex items-center justify-center h-12 w-full lg:w-full rounded-full text-center bg-gray-800"
                >
                  <p className="text-white">看第一集</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
