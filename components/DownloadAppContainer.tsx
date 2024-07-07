import React from 'react'

export default function AppContainer() {
    return (
        <div className='container flex mt-[40px]'>
            <div className='w-1/2 flex flex-col  justify-center items-center'>
                <div className='w-2/3'>
                    <div className='font-bold text-[28px]'>Khám phá bản thân </div>
                    <div className='font-bold text-[28px]'>qua ứng dụng Saymee </div>
                    <div className='text-textslate text-[20px] mt-[10px]'>Cùng nhiều tiện ích và tính năng độc quyền</div>

                    <div className='text-pinksaymee text-[28px] font-bold mt-[30px]' style={{lineHeight : '40px'}}>TẢI  NGAY APP SAYMEE</div>
                    <div className="flex-col space-y-4 pt-[12px]">
                        <div className='flex space-x-5'>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <img src='google-play-badge.png' className='app-img'></img>
                                </div>
                                <div>
                                    <img src='app-store-apple-logo.png' className='app-img'></img>
                                </div>
                            </div>
                            <div className='p-1 shadow-lg rounded-xl'>
                                <img src='saymee_qr.png' className='w-[120px]'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src='/saymee_app.png'></img>
            </div>
        </div>
    )
}
