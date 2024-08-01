import React from 'react'

function Card({extraStyle, textStyle, title, countStyle, count, children}) {
  return (
    <div className={`w-[258px] h-[134px] mt-[54px] bg-white text-center bg-whitex py-[24px] border border-transparent group rounded-[8px] duration-300 hover:border-purple ${extraStyle}`}>
        <p className={`tracking-[0.4px] leading-[23.85px] font-bold text-[19px] text-gray-30 group-hover:text-purple ${textStyle}`}>{title}</p>
        <p className={`group-hover:text-purple font-bold text-[40px] leading-[50.2px] tracking-[1px] ${countStyle}`}>{count}</p>
        {children}
    </div>
  )
}

export default Card