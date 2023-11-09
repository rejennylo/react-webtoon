import { BsFillSuitHeartFill } from "react-icons/bs";

const stateIcons = [
  { id: 1, state: "新", text: "text-teal-500", bg: "bg-black" },
  { id: 2, state: "更新", text: "text-white", bg: "bg-teal-500" },
  { id: 3, state: "暫停", text: "text-white", bg: "bg-gray-400" },
  { id: 4, state: "完", text: "text-white", bg: "bg-black" },
];

export const CardSm = ({
  title,
  author,
  image,
  synopsis,
  genre,
  likeis,
  textColor,
  bgColor,
  newRelease,
  todayUp,
  hiatus,
  completed,
  styles,
}) => {
  return (
    <li className={`card-sm list-none inline-block ${styles}`}>
      <a href="#" className="relative max-h-[210px] max-w-[210px]">
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="p-[5%]">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center py-[2%]">
              <BsFillSuitHeartFill className="inline-block h-4 w-4 text-teal-500 mr-[3%]" />
              <span className="text-teal-500">{likeis}</span>
            </div>
            <span>
              {stateIcons.map((icon) => {
                if (
                  (icon.id === 1 && newRelease) ||
                  (icon.id === 2 && todayUp) ||
                  (icon.id === 3 && hiatus) ||
                  (icon.id === 4 && completed)
                ) {
                  return (
                    <span
                      key={icon.id}
                      className={`${icon.text} ${icon.bg} inline-block rounded-full h-8 w-8 text-xs font-semibold leading-8 text-center mr-[2%]`}
                    >
                      {icon.state}
                    </span>
                  );
                }
                return null;
              })}
            </span>
          </div>
          <span
            className={`absolute bottom-[5%] left-[5%] text-sm ${textColor}`}
          >
            {genre}
          </span>
          <div
            className={`absolute top-0 left-0 h-full w-full opacity-0 hover:opacity-100 ${bgColor}`}
          >
            <div className="p-[5%]">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <div className="relative py-[2%] before:absolute before:top-[35%] before:border-t before:border-solid before:w-[9%]">
                <p className="text-sm text-white ">{author}</p>
                <p className="whitespace-normal text-xs text-white pt-[20%]">
                  {synopsis}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={image} alt="image" />
      </a>
    </li>
  );
};
