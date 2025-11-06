import { useState, useMemo } from "react"
import eventsData from "../data/events.ts"
import EventModal from "./EventModal.tsx"

import type { Event } from "../types/Event"


// import { MapContainer, TileLayer } from "react-leaflet" 
// import ResizeMapOnModalOpen from "../hooks/ResizeMapOnModalOpen.tsx"; 

export default function CalendarComponent() {
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);

    const groupedEvents = useMemo(() => {
        const sorted = [...eventsData].sort(
            (a, b) => new Date(a.date).getTime()- new Date(b.date).getTime()
        );

        return sorted.reduce((groups: Record<string, Event[]>, event) => {
            const month = new Date(event.date).toLocaleString("default", {
                month: "long",
                year: "numeric",
            })
            if (!groups[month]) groups[month] = []
            groups[month].push(event)
            return groups
        }, {})
    }, [])

    return(
        <div className="bg-zinc-900 text-white min-h-screen py-10">
            {Object.entries(groupedEvents).map(([month, events]) => (
                <div key={month} className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4 px-4">{month}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                        {events.map((event) => (
                            <div 
                                key={event.id}
                                onClick={() => setActiveEvent(event)}
                                className="relative rounded-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.03]"
                            >
                                <img
                                    src={event.background}
                                    alt={event.eventName}
                                    className="w-full h-75 object-cover opacity-80"
                                />
                                <div className="absolute top-2 right-50 text-white font-bold py-1 flex flex-row justify-center">
                                    {event.dateOnFlyer !== false && <p className="text-2xl text-gray-300 flex flex-row justify-center">
                                        {new Date(event.date).toLocaleDateString(undefined, {
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </p>}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                                    <h3 className="text-lg font-bold">{event.eventName}</h3>
                                    <p className="text-sm text-yellow-400">{event.eventType}</p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {event.gamesPlayed.join(" • ")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}         
            <EventModal activeEvent={activeEvent} onClose={() => setActiveEvent(null)} />
        </div>
    )
}