export interface Event {
    id: number;
    date: string;
    eventName: string;
    eventType: string;
    background: string;
    location: string;
    gamesPlayed: string[];
    eventDescription?: string;
}