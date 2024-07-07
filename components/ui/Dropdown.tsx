import React from 'react'


type DropdownProps = {
    items: DropDownItem[],
    className: string
}

export type DropDownItem = {
    imageUrl: string,
    title: string,
}

export default function Dropdown({ items, className }: DropdownProps) {
    return (
        <div className={`absolute top-[60px] shadow-lg z-50 dropdown ${className} invisible`}>
            {items.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                const itemClass = `flex relative cursor-pointer items-center p-[12px] z-40 hover:bg-[#FFECF9] bg-white ${isFirst ? 'dropdownfirst' : ''
                    } ${isLast ? 'dropdownlast' : ''}`;

                return (
                    <span key={index} className={itemClass}>
                        <img src={item.imageUrl} alt={item.title} className='h-[24px] w-[24px]' />
                        <span className='pl-[12px] text-[14px] font-medium hover:text-pinksaymee'>{item.title}</span>
                    </span>
                );
            })}
        </div>
    )
}
