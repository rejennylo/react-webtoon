const snsIcons = [
  { id: 1, position: "[background-position-x:-1093px] [background-position-y:-874px] ", size: "h-[18px] w-[18px] "},
  { id: 2, position: "[background-position-x:-239px] [background-position-y:-1086px] ", size: "h-[18px] w-[19px] "},
  { id: 3, position: "[background-position-x:-1040px] [background-position-y:-1013px] ", size: "h-[18px] w-[20px] "},
];

const footerMenuItems = [
  { id: 1, text: "意見回饋", class: "border-l h-3 mx-4" },
  { id: 2, text: "幫助", class: "border-l h-3 mx-4" },
  { id: 3, text: "條款", class: "border-l h-3 mx-4" },
  { id: 4, text: "隱私保護", class: "border-l h-3 mx-4" },
  { id: 5, text: "廣告", class: "border-l h-3 mx-4" },
  { id: 6, text: "作品授權及異業合作", class: "" },
];

export const Footer = () => {
  return (
    <div className="bg-gray-100">
      {/* notice area -start */}
      <div className="border-solid border-y border-gray-200">
        <div className="flex items-center h-[50px] xl:w-[1200px] m-auto">
          <a href="#" className="leading-[50px] w-[80px]">
            通知
            <span className="inline-block h-[13px] w-[7px] mx-4 bg-icons [background-position-x:-1300px] [background-position-y:-991px]"></span>
          </a>
          <a href="#" className="flex leading-[50px] items-center">
            <span>【重要通知】追漫券 11月最新上線作品名單</span>
            <span className="ml-4 text-sm text-gray-400">2023/10/18</span>
          </a>
        </div>
      </div>
      {/* notice area -end */}
      {/* app link -start */}
      <div>
        <div className="flex justify-center items-center">
          <span className="inline-block mt-4 h-[140px] w-[227px] bg-icons [background-position-x:0px] [background-position-y:-825px]"></span>
          <div className="ml-5 mt-1">
            <p>
              即刻下載 WEBTOON APP
              <br />
              追了才酷，一看就停不下來！
            </p>
            <a
              href="#"
              className="inline-block h-[40px] w-[134px] bg-icons [background-position-x:-1136px] [background-position-y:-717px] mr-2"
            ></a>
            <a
              href="#"
              className="inline-block h-[40px] w-[109px] bg-icons [background-position-x:-1019px] [background-position-y:-969px]"
            ></a>
          </div>
        </div>
      </div>
      {/* app link -end */}
      {/* sns -start */}
      <div className="flex justify-center pt-8 border-solid border-t border-gray-200">
        <ul className="flex justify-center">
          {snsIcons.map((icon) => {
            return (
              <li key={icon.id} className="flex">
                <a
                  href="#"
                  className={`${
                    icon.position + icon.size
                  } inline-block bg-icons mx-6 `}
                ></a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* sns -end */}
      {/* footer menu -start */}
      <ul className="flex justify-center pt-7">
        {footerMenuItems.map((item) => {
          return (
            <li key={item.id}>
              <a href="#">{item.text}</a>
              <span className={item.class}></span>
            </li>
          );
        })}
      </ul>
      {/* footer menu -end */}
      {/* copyright */}
      <p className="text-center pt-4 text-sm text-gray-300">ⓒ WEBTOON</p>
      <p className="flex justify-center pt-4 pb-8">
        <span className="inline-block h-[36px] w-[100px] bg-icons [background-position-x:-447px] [background-position-y:-1046px]"></span>
      </p>
    </div>
  );
};
