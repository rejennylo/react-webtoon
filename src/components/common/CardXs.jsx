export const CardXs = ({title, author, type, number, image}) => {
  return (
    <li className="card-xs py-2 relative">
      <a
        href="#"
        className="flex items-center before:h-[1px] before:w-full before:bg-gray-300 before:absolute before:top-0 before:shadow-[0_113px_0_rgba(209,213,219,1)]"
      >
        <img src={image} alt="image" />
        <span className="w-9 flex justify-center">
          <span className="text-xl font-semibold">{number}</span>
        </span>
        <div>
          <p className="text-sm text-gray-400">{type}</p>
          <p className="text-xl font-semibold my-1">{title}</p>
          <p className="text-sm">{author}</p>
        </div>
      </a>
    </li>
  );
};
