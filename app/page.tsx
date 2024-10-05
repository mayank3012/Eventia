"use client"
import EventsCuoreselSection from "@/components/shared/EventsCuoreselSection";
import { EventData } from "@/lib/data/eventsData";
import { IEvent } from "@/lib/interfaces/IEventsData";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";


type Repo = {
  sportsEvents: IEvent[],
  techEvents: IEvent[],
  healthEvents: IEvent[],
  artEvents: IEvent[],
  bussinessEvents: IEvent[]
}


export default function Home() {

  const [events, setEvents] = useState<Repo>({
    sportsEvents: [],
    techEvents: [],
    artEvents: [],
    healthEvents: [],
    bussinessEvents: []
  });

  useEffect(() => {
    const sportsEvents = EventData.events.filter((e: IEvent) => e.category == 'Sports').slice(0, 10);
    const artEvents = EventData.events.filter((e: IEvent) => e.category == 'Art').slice(0, 10);
    const bussinessEvents = EventData.events.filter((e: IEvent) => e.category == 'Bussiness').slice(0, 10);
    const techEvents = EventData.events.filter((e: IEvent) => e.category == 'Technology').slice(0, 10);
    const healthEvents = EventData.events.filter((e: IEvent) => e.category == 'Health').slice(0, 10);
    setEvents({
      sportsEvents,
      techEvents,
      artEvents,
      healthEvents,
      bussinessEvents
    });
  }, []);


  return (
    <div>
      <EventsCuoreselSection
        Events={events.sportsEvents}
        SectionHeading="Sports"
      />
      <EventsCuoreselSection
        Events={events.techEvents}
        SectionHeading="Technology"
      />
      <EventsCuoreselSection
        Events={events.sportsEvents}
        SectionHeading="Art"
      />
      <EventsCuoreselSection
        Events={events.sportsEvents}
        SectionHeading="Health"
      />
      <EventsCuoreselSection
        Events={events.sportsEvents}
        SectionHeading="Bussiness"
      />
    </div>
  );
}
