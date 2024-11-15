import React from "react";

const InputWrapper = ({ children }) => {
  return (
    <div
      className=" flex flex-col
  justify-start  w-full  max-w-[300px] my-2
  "
    >
      {children}
    </div>
  );
};

export default InputWrapper;
