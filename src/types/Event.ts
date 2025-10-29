import type { Game } from "./Games";

export interface Event {
    id: number;
    date: string;
    dateOnFlyer?: boolean;
    eventName: string;
    eventType: string;
    background: string;
    location: string;
    gamesPlayed: Game[];
    eventDescription?: string;
    flier?: string;
}