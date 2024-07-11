import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { DataPackList } from "@/models/DataPackList"
import { MotionDiv } from "./ui/MotionDiv"

export function DataPackCarousel() {
    return (
        <div className="overflow-hidden">
            <div className='text-[28px] mb-[20px]' style={{ fontWeight: '700', lineHeight: '40px' }}>Gói cước đi kèm nhiều bất ngờ</div>
            <MotionDiv initial={{ opacity: 0, translateX: -200}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 1 }} className="container text-left w-[90%]">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full "
                >
                    <CarouselContent>


                        {DataPackList.map((value) => {
                            return (
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 z-0">
                                    <div className="p-1">
                                        <Card style={{ background: value.color }} className={`h-[320px] text-white pt-6 relative flex flex-col`}>
                                            <span className="ml-4" style={{ lineHeight: '36px', fontSize: '24px', fontWeight: 600 }}> {value.name}</span>
                                            <div className="flex items-center ml-4 flex-grow">
                                                <span className="text1">{value.value}</span>
                                                <span className="text2">|Ngày</span>
                                            </div>
                                            <div className="ml-4 z-20 relative flex flex-col w-[50%] flex-grow">
                                                {value.description.length !== 0 && value.description.map((value) => {
                                                    return (
                                                        <span style={{ fontSize: '14px', lineHeight: '18px' }}>{value}</span>
                                                    )
                                                })}

                                            </div>

                                            <div className="flex items-center ml-4 z-20 flex-grow">
                                                <span className="text2">{value.price}</span>
                                                <span className="text3">|30 Ngày</span>

                                            </div>

                                            <img src="/Frame1.png" className="h-[60%] absolute right-[12px] bottom-0 z-10"></img>

                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })}

                    </CarouselContent>
                    <CarouselPrevious className="text-pinksaymee hover:text-pinksaymee w-[40px] h-[40px] hover:bg-[#FFECF9]" />
                    <CarouselNext className="text-pinksaymee hover:text-pinksaymee w-[40px] h-[40px] hover:bg-[#FFECF9]" />
                </Carousel>
            </MotionDiv>
        </div>
    )
}
