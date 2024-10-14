import CustomCaruosel from '@/components/shared/CustomCaruosel';
import CustomEventCard from '@/components/shared/CustomEventCard';
import { CarouselItem } from '@/components/ui/carousel';
import { EventData } from '@/lib/data/eventsData';
import { IEvent } from '@/lib/interfaces/IEventsData';

const EventsCuoreselSection = ({ SectionHeading = "", EventKey }: { SectionHeading?: string, EventKey: string }) => {
    const data = EventData.events.filter((e: IEvent) => e.category == EventKey).slice(0, 10);
    return (
        <>
            <div className='mb-5 mt-10 font-bold border-b border-black'>
                <h2 className="text-2xl text-bold">{SectionHeading}</h2>
            </div>
            <CustomCaruosel>
                {data?.map((item: IEvent, index: number) => (
                    <CarouselItem key={index} className={`basis-1/2 sm:basis-1/3 lg:basis-1/5 pl-2 md:pl-4`}>
                        <CustomEventCard data={item} />
                    </CarouselItem>
                ))}
            </CustomCaruosel >
        </>
    )
}

export default EventsCuoreselSection