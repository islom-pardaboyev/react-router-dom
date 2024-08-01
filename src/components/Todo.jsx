import React from "react";

function Todo({status, title}) {

    const bgColor =
    status === "urgent" ? "bg-yellow-400" :
    status === 'new' ? "bg-green-400" :
    status === "default" ? "bg-gray-400" : "";

  return (
    <div className="flex items-center py-5 border-b px-8 justify-between">
      <div className="flex items-center gap-4">
        <input className="rounded-full" type="checkbox" />
        <h1 className="font-semibold tracking-[0.2px] text-[14px] leading-[20px] text-dark">
          {title}
        </h1>
      </div>
      <p className={`text-white uppercase font-bold leading-[13.81px] px-3 py-[5px] rounded-[8px] tracking-[0.5px] text-[11px] ${bgColor}`}>
        {status}
      </p>
    </div>
  );
}

export default Todo;

