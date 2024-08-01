import React from "react";

function Input() {
  return (
    <div className="flex items-center py-5 border-b px-8 justify-between">
      <input type="text" className="outline-none" placeholder="Create new task"/>
      
      <p className="text-gray-30 w-6 flex bg-[#F0F1F7] h-6items-center justify-center rounded-full leading-[20px] tracking-[0.2px] text-[16px]">
        +
      </p>
    </div>
  );
}

export default Input;
