import Modal from "./Modal"
import type { Event } from "../types/Event"

interface EventModalProps {
    activeEvent: Event | null;
    onClose: () => void;
}

export default function EventModal({ activeEvent, onClose }: EventModalProps) {
    if (!activeEvent) return null;

    const eventDate = new Date(activeEvent.date);
    const isPast = eventDate < new Date();

    if (isPast&& !activeEvent.tournament) return null;

    const isTournament = activeEvent.tournament;

    return(
        <Modal isOpen={!!activeEvent} onClose={onClose}>
            {activeEvent && (
                <div className="flex flex-col items-center rounded-md">
                    <img
                        src={activeEvent.flier ||activeEvent.background}
                        alt={activeEvent.eventName}
                        className="max-h-[80vh] object-contain rounded-md"
                    />
                    <h2 className="text-2xl font-bold mt-4">
                        {activeEvent.eventName}
                    </h2>
                    <p className="text-gray-300">{activeEvent.eventType}</p>
                    <p className="text-gray-400 mt-2">
                        Games: {activeEvent.gamesPlayed.join(", ")}
                    </p>
                    <p className="text-gray-500 mt-1">{activeEvent.location}</p>
                    <p className="text-black mt-5">{activeEvent.eventDescription}</p>  
                    <div className="pt-2 mt-2 mb-10 w-full h-[600px] relative rounded-lg overflow-hidden flex flex-row justify-center align-middle">      
                        {isPast && isTournament ? (
                            <div className="flex flex-col items-center gap-4">
                                {activeEvent.top8Graphic && (
                                    <img
                                        src={activeEvent.top8Graphic}
                                        alt="Top 8 Graphic"
                                        className="max-w-full rounded-md"
                                    />
                                )}
                                {activeEvent.top3Photo && (
                                    <img
                                        src={activeEvent.top3Photo}
                                        alt="Top 3 Picture"
                                        className="max-w-[60%] rounded-md"
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="w-full h-full">
                                <iframe 
                                    src={`https://www.start.gg/tournament/${activeEvent.registrationSlug}/register/embed`} 
                                    height="600"    
                                    width="100%" 
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Modal>  
    )
}