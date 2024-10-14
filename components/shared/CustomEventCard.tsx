
"use client"

import { MaxRatting } from '@/lib/constants'
import { Card, CardContent } from '../ui/card'
import { IEvent } from '@/lib/interfaces/IEventsData'
import { CldImage } from 'next-cloudinary'
import { FaStar } from 'react-icons/fa'
import { LiaRupeeSignSolid } from 'react-icons/lia'

interface IProp {
    className?: string,
    data: IEvent
}

const CustomEventCard = ({ className = "", data }: IProp) => {
    return (
        <Card className='overflow-hidden bg-transparent border-none shadow-none'>
            <CardContent className={`p-0 flex flex-col ${className}`}>
                <div className="flex flex-col relative overflow-hidden rounded-lg">
                    <div>
                        <CldImage src={'eventia/events_banner/sample'} width={10000} height={10000} alt={data.title} className='aspect-[90/160]' priority={true} ></CldImage>
                    </div>
                    <div className="absolute bottom-0 flex w-full bg-black justify-between text-white p-2 text-sm sm:text-sm">
                        <div className='flex items-center gap-1'>
                            {data.rating && <><FaStar className='text-red-800 inline' /> <span>{`${data.rating}/${MaxRatting}`}</span></>}
                        </div>
                        <div>
                            {data.price && <><LiaRupeeSignSolid className='inline' /><span>{data.price}</span></>}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl font-bold line-clamp-2' title={data.title}>{data.title}</h2>
                    <div className='text-gray-700 font-semibold max-w-full whitespace-nowrap capitalize overflow-hidden text-ellipsis' title={data.keywords?.join('/')}>{data.keywords?.join('/')}</div>
                </div>
            </CardContent>
        </Card >
    )
}

export default CustomEventCard