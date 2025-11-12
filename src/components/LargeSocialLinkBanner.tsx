import { SiStartdotgg, SiTwitch, SiYoutube, SiInstagram } from "@icons-pack/react-simple-icons"
import hexes from "../assets/Hex_Example.png";

export default function LargeSocialLinkBanner() {
    return (
        <>
            <div className="min-h-[10vh] bg-red-700 flex flex-col sm:flex-row justify-center items-center gap-5" style={{ backgroundImage: `url(${hexes})`, backgroundPosition: "50% 20%"}}>
                <div 
                    className="flex flex-row p-10">
                    <a 
                        href="https://www.start.gg/tournament/let-s-roc-12/details"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        <div className="text-black hover:text-gray-400 hover:scale-[1.3] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] transition delay-100 duration-200"><SiStartdotgg size={"3em"}/> </div>
                    </a>
                </div>
                <div className="flex flex-row p-10">
                    <a
                        href="https://www.twitch.tv/585fighterz"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        <div className="text-black hover:text-gray-400 hover:scale-[1.3] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] transition delay-100 duration-200"><SiTwitch size={"3em"}/></div>
                    </a>
                </div>
                <div className="flex flex-row p-10 children:text-white"> 
                    <a
                        href="https://www.twitch.tv/585fighterz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >         
                        <div className="text-black hover:text-gray-400 hover:scale-[1.3] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] transition delay-100 duration-200"><SiYoutube size="3em"/></div>
                    </a>
                </div>
                <div className="flex flex-row p-10 hover:text-red"> 
                    <a
                        href="https://www.instagram.com/585fighterz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >         
                        <div className="text-black hover:text-gray-400 hover:scale-[1.3] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] transition delay-100 duration-200"><SiInstagram size="3em"/></div>
                    </a>
                </div>
            </div>
        </>
    )
}