export interface IOrganizer {
    name: string;
    contactEmail: string;
    phone: string;
}

export interface IEvent {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    eventType: string;
    organizer: IOrganizer;
    ticketsAvailable: boolean;
    price: number;
    imageUrl: string;
    rating: number;
    createdBy: string;
    createdAt: string;
    lastUpdated: string;
    keywords: string[];
}

export interface IEventsData {
    events: IEvent[];
}