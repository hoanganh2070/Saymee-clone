import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { ToppingList } from "@/models/ToppingList"
import { MotionDiv } from "./ui/MotionDiv"
export function ToppingCarousel() {
    return (
        <div className="overflow-hidden">
            <div className='text-[28px] mt-[40px] mb-[20px]' style={{ fontWeight: '700', lineHeight: '40px' }}>Cùng các gói topping hấp dẫn</div>
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


                        {ToppingList.map((value) => {
                            return (
                                <CarouselItem className="md:basis-1/2 lg:basis-1/3 z-0">
                                    <div className="p-1">
                                        <Card style={{ background: value.color }} className={`h-[170px] pt-6 relative flex flex-col`}>
                                            <img src={value.imageUrl} className="w-[70px] absolute top-0 right-0">
                                            </img>

                                            <div className="ml-4 text2">{value.name}</div>
                                            <div className="ml-4 flex-grow w-[75%]">free <span className="font-bold">Dung lượng truy cập {value.category}</span></div>

                                            <div className="ml-4 flex-grow">
                                                <span className="text-pinksaymee font-bold text-[32px]">10K/</span>
                                                <span className="text-pinksaymee font-bold text-[20px]">30 ngày</span>
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
