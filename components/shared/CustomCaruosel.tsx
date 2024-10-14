import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const CustomCaruosel = ({ children }: { children: React.ReactNode }) => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full lg:w-[95%] m-auto"
        >
            <CarouselContent className='ml-0 pr-6 md:pr-10 lg:pr-0'>
                {children}
            </CarouselContent>
            <CarouselPrevious className='hidden lg:flex' />
            <CarouselNext className='hidden lg:flex' />
        </Carousel>
    )
}

export default CustomCaruosel