export const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center border-solid border-2 rounded-full ml-3 h-9 w-28 bg-gray-800 hover:bg-black text-white"
    >
      {text}
    </button>
  );
};
