import React from 'react'
import { MotionDiv } from './ui/MotionDiv'

export default function AppContainer() {
    return (
        <div className='container flex laptop:flex-row flex-col mt-[40px] overflow-hidden'>
            <MotionDiv initial={{ opacity: 0, translateX: 200}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 1 }} className='w-full laptop:w-1/2 flex flex-col  justify-center items-center'>
                <div className='w-auto laptop:w-2/3 '>
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
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, translateX: 200}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 1 }} className='mt-16 w-full laptop:w-1/2 laptop:mt-0'>
                <img src='/saymee_app.png'></img>
            </MotionDiv>
        </div>
    )
}
