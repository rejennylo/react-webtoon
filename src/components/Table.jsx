import {
  FaFacebookSquare,
  FaLine,
  FaCheckSquare,
  FaPlus,
} from "react-icons/fa";

export const Table = () => {
  return (
    <div name="table-wrap">
      <div name="table-container" className="m-auto h-max-[240px] max-w-[1200px]">
        <div name="table-header" className="relative">
          <div className="absolute top-0 h-full w-full flex flex-col justify-center">
            <div name="header-title" className="info flex flex-col items-center">
              <h2 className="text-lg">類型</h2>
              <h1 className="text-2xl font-semibold">標題</h1>
              <p>作家</p>
            </div>
            <div name="header-sns-icons" className="sns absolute bottom-0 right-0">
              <ul className="flex justify-end">
                <li>
                  <FaFacebookSquare className="h-[32px] w-[32px]" />
                </li>
                <li>
                  <FaLine className="h-[32px] w-[32px]" />
                </li>
                <li>
                  <FaCheckSquare className="h-[32px] w-[32px]" />
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
        <div name="table-main">
          <div name="list-wrap"></div>
          <div name="aside-wrap"></div>
        </div>
      </div>
    </div>
  );
};
