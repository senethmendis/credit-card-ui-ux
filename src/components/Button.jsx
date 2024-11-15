import React from "react";

const Button = ({ children }) => {
  return (
    <button className="w-full transition-all hover:border  text-white font-normal text-lg rounded-md max-h-full min-h-[40px] max-w-[300px] bg-gradient-to-l from-blue-500 to-blue-700 my-2">
      {children}
    </button>
  );
};

export default Button;
