import React from 'react'

type ButtonProps = {
    title: string,
    height: string,
    width: string
    
}

export default function Button({title, height, width}: ButtonProps) {
  return (
    <div style={{ height: `${height}`, width: `${width}` }} className={`border-[1px] font-semibold text-[14px] border-pinksaymee shadow-md cursor-pointer
       flex items-center justify-center rounded-3xl text-pinksaymee hover:bg-[#FFECF9]`}>{title}</div>
  )
}
