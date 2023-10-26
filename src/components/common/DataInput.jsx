export const DataInput = ({ id, title, type, name, value, onChange }) => {
  return (
    <label key={id} className="flex items-center p-3 max-w-lg">
      <span className="mr-2">{title}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-md"
      />
    </label>
  );
};
