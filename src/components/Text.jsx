import React from "react";

function Text({title, number}) {
  return (
    <div className="flex items-center py-5 border-b px-8 justify-between">
      <h1 className="font-semibold tracking-[0.2px] text-[14px] leading-[20px] text-dark">
        {title}
      </h1>
      <p className="text-gray-30 leading-[20px] tracking-[0.2px] text-[14px]">
        {number}
      </p>
    </div>
  );
}

export default Text;
