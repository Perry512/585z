import { sponsors } from "../data/sponsors";

import type { Sponsor } from "../types/Sponsor";

export default function SponsorView() {

    const renderSponsorCard = (sponsor: Sponsor) => (
        <div
            key={sponsor.name}
            className="relative rounded-ms overflow-hidden cursor-pointer transition-transform w-[200px] hover:scale-[1.03]"    
        >
            <a 
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
            > 
            <img 
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full bg-fit object-contain"
            />
            </a>
            <div className="m-3 text-white">
            <p>{sponsor.name}</p>
            </div>
        </div>

    )
    return (
        <div className="min-h-[100vh]">
            
                <h2 className="text-3xl font-bold mb-10 px-4 text-white mt-10">Our Sponsors</h2>
                <div className="mx-20 flex flex-wrap items-center justify-center gap-8">
                    {sponsors.map(renderSponsorCard)}
                </div>
        </div>
    )
}