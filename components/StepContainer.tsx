
import React from 'react'
import StepCard from './ui/StepCard'
import { MotionDiv } from './ui/MotionDiv'
const StepCardList = [
    {
        imageUrl: '/saymee_step1.png',
        stepNumber: '01',
        stepDescription: 'Chọn SIM số mà bạn yêu thích'
    },
    {
        imageUrl: '/saymee_step2.png',
        stepNumber: '02',
        stepDescription: 'Thanh toán trực tuyến nhanh chóng'
    },
    {
        imageUrl: '/saymee_step3.png',
        stepNumber: '03',
        stepDescription: 'Nhận SIM và kích hoạt tại cửa hàng'
    },
]

export default function StepContainer() {
    return (
        <div className='container'>
            <div className='w-full footer rounded-[20px] text-center'>
                <div className='font-bold text-[28px] pt-[40px]'>Dễ dàng sở hữu SIM SAYMEE</div>
                <div className='px-[30px] pb-[30px] flex space-x-10'>
                    {StepCardList.map((step, index) => {
                        return (
                            <MotionDiv initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}>
                                <StepCard key={index} imageUrl={step.imageUrl} stepNumber={step.stepNumber} stepDescription={step.stepDescription} />
                            </MotionDiv>)

                    })}
                </div>
            </div>
        </div>
    )
}
