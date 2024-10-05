
"use client"

import { Card, CardContent } from '../ui/card'
import { IEvent } from '@/lib/interfaces/IEventsData'
import { CldImage } from 'next-cloudinary'

interface IProp {
    className?: string,
    data: IEvent
}

const CustomEventCard = ({ className = "", data }: IProp) => {
    return (
        <Card className='overflow-hidden'>
            <CardContent className={`p-0 flex items-center justify-center ${className}`}>
                <div className="flex flex-col">
                    <div className='aspect-video'>
                        <CldImage src={'eventia/events_banner/sample' || 'eventia/coming-soon'} width={500} height={500} alt={data.title} className='h-full' priority={true} ></CldImage>
                    </div>
                    <div className="p-6">
                        <span className="text-3xl font-semibold">{data.title}</span>
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}

export default CustomEventCard