import React from 'react'
import Button from './ui/SaymeeButton';
import { MotionDiv } from './ui/MotionDiv';

export default function PickSimContainer() {
    return (
        <div className='container mt-10 flex flex-col laptop:flex-row gap-7 overflow-hidden mb-10'>
            <MotionDiv className='w-full laptop:w-1/3' initial={{ opacity: 0, translateX: -100}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 0.5 }}>
                <img src='saymee_sim_card.png'></img>
            </MotionDiv>
            <MotionDiv initial={{ opacity: 0, translateX: 100}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 0.5 }} className='w-full laptop:w-2/3 flex flex-col items-center space-y-6'>
                <span className='text-[28px]' style={{ fontWeight: '700', lineHeight: '40px' }}>SIM Saymee, chọn là Mê</span>
                <div className="grid grid-rows-3 grid-cols-2 gap-5 w-full ">

                    {Array.from({ length: 6 }).map((_, index) => {
                        return (
                            <div className="rounded-lg shadow-md h-[90px] flex laptop:flex-row flex-col px-6 cursor-pointer hover:bg-[#FFECF9] justify-between" >
                                <div style={{ fontWeight: 600, lineHeight: "26px", letterSpacing: '1px' }} className='h-full items-center flex laptop:text-[20px] text-[15px]'>079 440 5241</div>
                                <div className='h-full items-center flex laptop:text-[20px] text-[15px] font-semibold  text-pinksaymee'>35.000đ
                                    <svg className='fill-pinksaymee' width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                        <g data-name="Layer 2">

                                            <g data-name="arrow-ios-forward">

                                                <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />

                                                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />

                                            </g>

                                        </g>

                                    </svg>
                                </div>

                            </div>
                        )
                    })}
                </div>


                <div className='w-1/2 flex justify-center'>
                    <Button height={'50px'} width={'90%'} title={'Khám phá kho sim'} />
                </div>
            </MotionDiv>
        </div >
    )
}
