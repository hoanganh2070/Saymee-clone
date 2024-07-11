import Image from 'next/image'
import React from 'react'

export type StepCardProps = {
    imageUrl: string,
    stepNumber: string,
    stepDescription: string,
    color : string
}

export default function StepCard({ imageUrl, stepNumber, stepDescription, color }: StepCardProps) {
    return (
        <div className=''>
            <img src={imageUrl} alt='step1' className='w-full' />
            <div className='flex mt-3 gap-[12px]'>
                <span style={{lineHeight : '60px', color : color}} className={`text-[60px] font-bold text-${color}-300`}>{stepNumber}</span>
                <span style={{lineHeight : '26px', letterSpacing : '1px', fontWeight : 500, boxSizing: 'border-box'}} className='text-[20px] font-semibold h-full text-left'>{stepDescription}</span>
            </div>
        </div>
    )
}
