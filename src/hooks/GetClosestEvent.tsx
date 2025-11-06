import type { Event } from "../types/Event";

export function GetClosestEvent(events: Event[]): Event | null {
    const now = new Date().getTime();

    const upcomingEvents = events
        .filter(e => new Date(e.date).getTime() >= now)
        .sort((a, b) => new Date(a.date).getTime() -new Date(b.date).getTime());

        if (upcomingEvents.length > 0) return upcomingEvents[0];

        const past = [...events]
            .filter(e => new Date(e.date).getTime() < now)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return past[0] || null;
}