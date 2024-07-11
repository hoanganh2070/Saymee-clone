import Image from 'next/image'
import React from 'react'
export default function MobileFooter() {

    const arrFooterItems = [
        {
            imageUrl: '/icons/ic_question.svg',
            title: 'Câu hỏi thường gặp'
        },
        {
            imageUrl: '/icons/ic_phone.svg',
            title: 'Liên hệ hotline'
        },
        {
            imageUrl: '/icons/ic_chat.svg',
            title: 'Gửi phản ánh'
        },
        {
            imageUrl: '/icons/ic_error.svg',
            title: 'Báo lỗi dịch vụ'
        }
    ]
    return (
        <footer className='laptop:hidden ml-auto w-full mr-auto footer bg-[#E3FAF8] sticky '>


            <div className='w-full flex flex-col items-center p-7'>
                <span className='font-bold text-xl'>Hỗ trợ khách hàng</span>
                <div className='flex'>
                    {arrFooterItems.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col rounded-lg hover:bg-pink-100 space-y-3 justify-center text-center max-w-[98px] items-center space-x-2 mt-2'>
                                <div className='cursor-pointer'>
                                    <img src={item.imageUrl}></img>
                                </div>
                                <div className='text-[14px] w-[90%]'>{item.title}</div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-between w-full mt-14'>
                    <div className='space-y-4'>
                        <Image src='/icons/ic_logo_saymee.svg' alt='logo' width={70} height={70} />


                        <Image src={"/img_registered_ministry_trade.png"} alt='Bộ công thương' width={112} height={42} />


                    </div>


                    <div className='w-[30%]'>
                        <div className="flex-col space-y-4">
                            <div className='font-bold text-[14px] mb-3 rounded-lg'>Tải ngay app Saymee</div>
                            <div className='flex space-x-1'>
                                <img src='/saymee_qr.png' className='w-[41.6%]'></img>
                                <div className='flex flex-col justify-between'>
                                    <div>
                                        <img src='/google-play-badge.png'></img>
                                    </div>
                                    <div>
                                        <img src='/app-store-apple-logo.png'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='flex space-x-3'>
                                <Image src={"/icons/ic_instagram.svg"} alt='instagram' width={24} height={24} />
                                <Image src={"/icons/ic_facebook.svg"} alt='facebook' width={24} height={24} />
                                <Image src={"/icons/ic_tiktok.svg"} alt='tiktok' width={24} height={24} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            <div className='w-full h-[50px] bg-pinksaymee flex items-center justify-center space-x-2'>
                <div>
                    <img src='/icons/ic_copyright.svg'></img>
                </div>
                <div className='text-[12px] hover:text-black text-white'>2022 - Saymee by MobiFone</div>
            </div>
        </footer>
    )
}
