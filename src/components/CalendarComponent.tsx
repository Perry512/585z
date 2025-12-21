import { useState, useMemo } from "react"
import eventsData from "../data/events.ts"
import EventModal from "./EventModal.tsx"

import type { Event } from "../types/Event"


// import { MapContainer, TileLayer } from "react-leaflet" 
// import ResizeMapOnModalOpen from "../hooks/ResizeMapOnModalOpen.tsx"; 

export default function CalendarComponent() {
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);

    const now = new Date();

    const { upcomingEvents, pastEvents } = useMemo(() => {
        const sortedAsc = [...eventsData].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        const upcoming = sortedAsc.filter(e => new Date(e.date) >= now);

        const past = sortedAsc
            .filter(e => new Date(e.date) < now)
            .reverse();

        return {
            upcomingEvents: upcoming,
            pastEvents: past,
        };
    }, []);

    const renderEventCard = (event: Event) => (
        <div
            key={event.id}
            onClick={() => setActiveEvent(event)}
            className="relative rounded-md overflow-hidden cursor-pointer transition-transform aspect-[3/4] w-[350px] hover:scale-[1.03]"
        >
            <img
                src={event.background}
                alt={event.eventName}
                className="w-full bg-fit object-contain opacity-80"
            />
            <div className="absolute top-2 right-50 text-white font-bold py-1 flex flex-row justify-center">
                {event.dateOnFlyer !== false && (
                    <p className="text-2xl text-gray-300 flex flex-row justify-center">
                        {new Date(event.date).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                        })}
                    </p>
                )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-lg font-bold">{event.eventName}</h3>
                <p className="text-sm text-yellow-400">{event.eventType}</p>
                <p className="text-xs text-gray-400 mt-1">
                    {event.gamesPlayed.join(" * ")}
                </p>
            </div>
        </div>
    )

    return(
        <div className="bg-zinc-900 text-white min-h-screen py-10">
            {/* Upcoming */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 px-4">Upcoming Events</h2>
                <div className="flex flex-wrap gap-6 justify-center px-4">{upcomingEvents.map(renderEventCard)}</div>
            </section>
            {/* Past */}
            <section>
                <h2 className="text-3xl font-bold mb-6 px-4">Past Events</h2>
                <div className="flex flex-wrap gap-6 justify-center px-4">
                    {pastEvents
                        .filter((e) => e.tournament)
                        .map(renderEventCard)
                    }
                </div>
            </section>         
            <EventModal activeEvent={activeEvent} onClose={() => setActiveEvent(null)} />
        </div>
    )
}