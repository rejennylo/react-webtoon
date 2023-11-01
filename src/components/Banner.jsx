export const Banner = () => {
  return (
    <div className="banner-wrap lgs:banner-bg hidden lgs:block">
      <div className="banner-container relative h-[492px] max-w-[1110px] m-auto">
        <div className="banner-main relative hidden lgs:block">
          <div className="banner-big">
            <span className="block h-full w-full absolute top-0 right-[101px]">
              <img
                src="../src/assets/dummy/6big-banner_946x492.png"
                alt="banner"
                className="object-none overflow-visible"
              />
            </span>
            <a href="#" className="absolute top-0 h-[492px] w-[806px]"></a>
          </div>
        </div>
        <div className="banner_sm1 absolute top-[38px] right-0 hidden lgs:block">
          <span>
            <img
              src="../src/assets/dummy/0____.png"
              alt="banner"
              className="object-none overflow-visible"
            />
          </span>
          <a
            href="#"
            className="absolute top-0 right-0 h-[198px] w-[302px]"
          ></a>
        </div>
        <div className="banner-sm2 absolute top-[229px] right-0 hidden lgs:block">
          <span>
            <img
              src="../src/assets/dummy/9___.png"
              alt="banner"
              className="object-none overflow-visible"
            />
          </span>
          <a
            href="#"
            className="absolute top-[12px] right-0 h-[212px] w-[282px]"
          ></a>
        </div>
      </div>
    </div>
  );
}