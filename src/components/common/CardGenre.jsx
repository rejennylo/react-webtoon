import { FiChevronRight } from "react-icons/fi";

export const CardGenre = ({ genre, info, bgColor }) => {
  return (
    <li className={`max-h-[210px] max-w-[210px] ${bgColor}`}>
      <a href="#" className="h-full w-full">
        <div className="flex flex-col justify-between h-full p-[5%]">
          <h3 className="flex items-center justify-between">
            <p className="text-xl font-semibold text-white">{genre}</p>
            <FiChevronRight className="h-6 w-6 text-white" />
          </h3>
          <p className="font-medium text-white">{info}</p>
        </div>
      </a>
    </li>
  );
};
