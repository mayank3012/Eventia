import CustomCaruosel from '@/components/shared/CustomCaruosel';
import CustomEventCard from '@/components/shared/CustomEventCard';
import { CarouselItem } from '@/components/ui/carousel';
import { IEvent } from '@/lib/interfaces/IEventsData';

const EventsCuoreselSection = ({ Events, SectionHeading = "" }: { Events: IEvent[], SectionHeading?: string }) => {
    return (
        <>
            <div className='mb-5 mt-10 font-bold border-b border-black'>
                <h2 className="text-2xl text-bold">{SectionHeading}</h2>
            </div>
            <CustomCaruosel>
                {Events?.map((item: any, index: number) => (
                    <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3 xl:basis-1/4`}>
                        <CustomEventCard data={item} />
                    </CarouselItem>
                ))}
            </CustomCaruosel>
        </>
    )
}

export default EventsCuoreselSection