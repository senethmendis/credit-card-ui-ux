const Input = ({ labelName, value, onChange, id, type, icon, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-neutral-400">
        {labelName}
      </label>
      <div className="flex items-center border-2 rounded-md">
        <div className="ml-2 text-neutral-400">{icon}</div>
        <input
          type={type || "text"}
          placeholder={placeholder}
          id={id}
          className="flex-1 h-10 p-2 outline-none "
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
