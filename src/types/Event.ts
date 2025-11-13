import type { Game } from "./Games";

export interface EventResult {
    game: string;
    top8Graphic?: string;
    top3Photo?: string;
}

export interface Event {
    id: number;
    date: string;
    dateOnFlyer?: boolean;
    eventName: string;
    eventType: string;
    background: string;
    location: string;
    gamesPlayed: Game["Title"][];
    eventDescription?: string;
    flier?: string;
    registrationSlug?: string;
    isFeatured?: boolean;
    tournament?: boolean;

    results?: EventResult[];
}