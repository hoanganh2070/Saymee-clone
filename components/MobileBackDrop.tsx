import React from 'react'
import { MotionDiv } from './ui/MotionDiv'
import Link from 'next/link'
import { ProductDropDownItems } from '@/models/ProductDropdownList'
import { UtilityDropDownItems } from '@/models/UtilityDropDownList'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'
import SaymeeButton from './ui/SaymeeButton'

export default function MobileBackDrop() {

    const arrNavItemLinks = ["Why Saymee?", "Sản phẩm", "Tiện ích", "Saymee Loyalty", "Hỗ trợ", "Tin tức", "Danh sách cửa hàng"]

    return (
        <div className='w-[100vw] h-[100vh] cursor-auto absolute top-[60px] z-40 right-0 overflow-hidden backdrop flex laptop:hidden'>
            <MotionDiv
                id='backdrop'
                style={{ opacity: 1 }}
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, translateX: -100 }}
                className='h-full w-[80%] bg-white opacity-100 z-50 relative space-y-6 overflow-auto'>
                {
                    arrNavItemLinks.map((item, index) => {
                        return (
                            <div className='cursor-pointer'>
                                {item !== "Sản phẩm" && item !== "Tiện ích" && <Link href='/' className='font-bold text-[15px] pt-3 ml-10'>{item}</Link>}
                                {item === "Sản phẩm" &&
                                    <>
                                        <span className='font-bold text-[15px] pt-3 ml-10'>{item}</span>

                                        {ProductDropDownItems.map((item, index) => {
                                            return (
                                                <span key={index} className='flex ml-20 my-7'>
                                                    <img src={item.imageUrl} alt={item.title} className='h-[24px] w-[24px]' />
                                                    <span className='pl-[12px] text-[14px] font-semibold hover:text-pinksaymee'>{item.title}</span>
                                                </span>
                                            )
                                        })}
                                    </>
                                }

                                {item === "Tiện ích" &&
                                    <Collapsible>
                                        <CollapsibleTrigger>

                                            <span className='font-bold text-[15px] pt-3 ml-10 flex'>
                                                <span>{item}</span>
                                                <svg className='fill-pinksaymee' width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <g data-name="Layer 2">
                                                        <g data-name="arrow-ios-forward">
                                                            <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
                                                            <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
                                                        </g>
                                                    </g>
                                                </svg>

                                            </span>
                                        </CollapsibleTrigger>
                                        {UtilityDropDownItems.map((item, index) => {
                                            return (
                                                <CollapsibleContent>
                                                    <span key={index} className='flex ml-20 my-7'>
                                                        <img src={item.imageUrl} alt={item.title} className='h-[24px] w-[24px]' />
                                                        <span className='pl-[12px] text-[14px] font-semibold hover:text-pinksaymee'>{item.title}</span>
                                                    </span></CollapsibleContent>
                                            )
                                        })}
                                    </Collapsible>}
                            </div>
                        )
                    })
                }
                <div className='w-full flex justify-center pb-6'>
                    <SaymeeButton title={'Đăng nhập'} height={'40px'} width={'170px'} />
                </div>
            </MotionDiv>
        </div>
    )
}
