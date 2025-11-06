import { SiStartdotgg, SiTwitch, SiYoutube } from "@icons-pack/react-simple-icons"
import hexes from "../assets/Hex_Example.png";

export default function LargeSocialLinkBanner() {
    return (
        <>
            <div className="min-h-[15vh] bg-red-700 flex flex-col sm:flex-row justify-evenly items-center gap-5 "style={{ backgroundImage: `url(${hexes})`}}>
                <div 
                    className="flex flex-row p-10 hover:border-2 border-blue-100">
                    <a 
                        href="https://www.start.gg/tournament/let-s-roc-12/details"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        <div className="flex flex-row"><SiStartdotgg color={"white"}size={"5em"}/> <h1 className="translate-y-2 text-white text-5xl font-semibold"> &nbsp;StartGG </h1> </div>
                    </a>
                </div>
                <div className="flex flex-row p-10 hover:border-2 border-blue-100">
                    <a
                        href="https://www.twitch.tv/585fighterz"
                        target="_blank"
                        rel="noopener noreferrer"
                    > 
                        <div className="flex flex-row"><SiTwitch color={"white"} size={"5em"}/> <h1 className="translate-y-2 text-white text-5xl font-semibold"> &nbsp;Twitch </h1></div>
                    </a>
                </div>
                <div className="flex flex-row p-10 hover:border-2 border-blue-100 children:text-white"> 
                    <a
                        href="https://www.twitch.tv/585fighterz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >         
                        <div className="flex flex-row"><SiYoutube color={"white"} size="5em"/> <p className="translate-y-2 text-white font-semibold text-5xl"> &nbsp;Youtube </p> </div>
                    </a>
                </div>
            </div>
        </>
    )
}