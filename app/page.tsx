"use client"
import EventsCuoreselSection from "@/components/shared/EventsCuoreselSection";
import Loader from "@/components/shared/Loader";
import { IEvent } from "@/lib/interfaces/IEventsData";
import { Suspense } from "react";


type Repo = {
  sportsEvents: IEvent[],
  techEvents: IEvent[],
  healthEvents: IEvent[],
  artEvents: IEvent[],
  bussinessEvents: IEvent[]
}


export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <EventsCuoreselSection
          SectionHeading="Sports"
          EventKey="Sports"
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <EventsCuoreselSection
          EventKey="Technology"
          SectionHeading="Technology"
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <EventsCuoreselSection
          EventKey="Art"
          SectionHeading="Art"
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <EventsCuoreselSection
          EventKey="Health"
          SectionHeading="Health"
        />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <EventsCuoreselSection
          EventKey="Business"
          SectionHeading="Bussiness"
        />
      </Suspense>
    </div>
  );
}
