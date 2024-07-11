
import React from 'react'
import StepCard from './ui/StepCard'
import { MotionDiv } from './ui/MotionDiv'
import { color } from 'framer-motion'
const StepCardList = [
    {
        imageUrl: '/saymee_step1.png',
        stepNumber: '01',
        stepDescription: 'Chọn SIM số mà bạn yêu thích',
        color : 'pink'
    },
    {
        imageUrl: '/saymee_step2.png',
        stepNumber: '02',
        stepDescription: 'Thanh toán trực tuyến nhanh chóng',
        color : '#19D3C5'
    },
    {
        imageUrl: '/saymee_step3.png',
        stepNumber: '03',
        stepDescription: 'Nhận SIM và kích hoạt tại cửa hàng',
        color : '#0071CE'
    },
]

export default function StepContainer() {
    return (
        <div className='container mt-3'>
            <div className='w-full footer rounded-[20px] text-center'>
                <div className='font-bold text-[20px] pt-[20px] laptop:text-[28px] laptop:pt-[40px]'>Dễ dàng sở hữu SIM SAYMEE</div>
                <div className='px-[30px] pb-[30px] flex flex-col space-y-3 laptop:flex-row laptop:space-x-10 laptop:space-y-0'>
                    {StepCardList.map((step, index) => {
                        return (
                            <MotionDiv initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}>
                                <StepCard key={index} imageUrl={step.imageUrl} stepNumber={step.stepNumber} stepDescription={step.stepDescription} color={step.color} />
                            </MotionDiv>)

                    })}
                </div>
            </div>
        </div>
    )
}
