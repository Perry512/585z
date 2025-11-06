import Modal from "./Modal"
import type { Event } from "../types/Event"

interface EventModalProps {
    activeEvent: Event | null;
    onClose: () => void;
}

export default function EventModal({ activeEvent, onClose }: EventModalProps) {
    if (!activeEvent) return null;

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
                            {/* <MapContainer 
                                center={[43.1545,-77.6047]} 
                                zoom={15} 
                                scrollWheelZoom={false} 
                                className="absolute inset-0 h-full w-full rounded-lg"
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <ResizeMapOnModalOpen  isOpen={!!activeEvent}/>
                            </MapContainer> */}
                            <div className="w-full h-full">
                                <iframe 
                                    src={`https://www.start.gg/tournament/${activeEvent.registrationSlug}/register/embed`} 
                                    height="600"    
                                    width="100%" 
                                />
                            </div>
                    </div>
                </div>
            )}
        </Modal>  
    )
}