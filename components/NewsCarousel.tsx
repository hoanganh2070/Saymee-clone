import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { NewsList } from "@/models/NewsList"
import { MotionDiv } from "./ui/MotionDiv"
export function NewsCarousel() {
    return (
        <div className="w-full text-center mb-10">
            <div className='text-[28px] mt-[40px] mb-[20px]' style={{ fontWeight: '700', lineHeight: '40px' }}>Bản tin Saymee</div>
            <MotionDiv initial={{ opacity: 0, translateX: -200}}
                            whileInView={{ opacity: 1, translateX: 0}}
                            transition={{ duration: 1 }}  className="container text-left">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full "
                >
                    <CarouselContent>


                        {NewsList.map((value) => {
                            return (
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 z-0">
                                    <div className="p-1">
                                        <Card className={`relative flex flex-col`}>
                                            <img src={value.imageUrl} className="rounded-tl-lg rounded-tr-lg">
                                            </img>
                                            <div className="px-2 py-3 space-y-2">
                                                <div className="text-blue-500">{value.category}</div>
                                                <div className="h-[50px] text-[20px] font-bold">{value.name}</div>

                                                <div className="h-[50px] text-ellipsis overflow-hidden "><span>{value.description}</span></div>
                                                <div className="flex justify-between">
                                                    <div className="flex space-x-1">
                                                        <img alt="icon" src="/icons/ic_calendar.svg" width="20" height="21" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }}></img>
                                                        <div>{value.date}</div>
                                                    </div>
                                                    <div className="flex space-x-1">
                                                        <img alt="icon" src="/icons/ic_eye.svg" width="20" height="21" decoding="async" data-nimg="1" loading="lazy" style={{ color: 'transparent' }}></img>
                                                        <div>{value.view}</div>
                                                    </div>

                                                </div>
                                            </div>
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
