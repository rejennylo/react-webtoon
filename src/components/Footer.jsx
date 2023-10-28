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
          <li className="flex">
            <a
              href="#"
              className="inline-block h-[18px] w-[18px] mx-6 bg-icons [background-position-x:-1093px] [background-position-y:-874px]"
            ></a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="inline-block h-[18px] w-[19px] mx-6 bg-icons [background-position-x:-239px] [background-position-y:-1086px]"
            ></a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="inline-block h-[18px] w-[20px] mx-6 bg-icons [background-position-x:-1040px] [background-position-y:-1013px]"
            ></a>
          </li>
        </ul>
      </div>
      {/* sns -end */}
      {/* footer menu -start */}
      <ul className="flex justify-center pt-7">
        <li>
          <a href="#">意見回饋</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">幫助</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">條款</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">隱私權保護</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">廣告</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">作品授權及異業合作</a>
          <span className="border-l h-3 mx-4"></span>
        </li>
        <li>
          <a href="#">繁體中文</a>
        </li>
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
