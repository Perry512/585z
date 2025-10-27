export interface Event {
    id: number;
    date: string;
    dateOnFlyer?: boolean;
    eventName: string;
    eventType: string;
    background: string;
    location: string;
    gamesPlayed: string[];
    eventDescription?: string;
    flier?: string;
}