import Image from 'next/image'
import React from 'react'

export default function () {
    return (
        <div className='absolute bg-white shadow-lg cart-dropdown laptop:w-[369px] w-[250px]  z-50 group-hover:visible invisible'>
            <div className='py-[1rem] px-[3rem] text-center'>
                <div className='text-[14px] font-medium'>Bạn chưa có sản phẩm nào trong giỏ hàng</div>
                <img src="/no-cart.png" alt="no-cart" className='w-full py-3' />
                <div className='h-[50px] cursor-pointer hover:bg-pinksaymee bg-[#E31D93] rounded-3xl
                 text-white flex items-center justify-center font-semibold text-[14px]'>Chọn số ngay</div>
            </div>
        </div>
    )
}
