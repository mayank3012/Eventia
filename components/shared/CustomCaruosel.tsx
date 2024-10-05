import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const CustomCaruosel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full  lg:w-[95%] m-auto"
        >
            <CarouselContent>
                {children}
            </CarouselContent>
            <CarouselPrevious className='hidden lg:flex' />
            <CarouselNext className='hidden lg:flex' />
        </Carousel>
    )
}

export default CustomCaruosel