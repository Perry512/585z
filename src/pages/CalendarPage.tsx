import CalendarComponent from "../components/CalendarComponent"
import Layout from "../components/Layout"
import gal4 from "../assets/gal4.jpg"
import { SiStartdotgg, SiTwitch, SiYoutube } from "@icons-pack/react-simple-icons"

export default function CalendarPage() {
    return (
        <Layout>
            <div className="min-h-[90vh]">
                <div className='min-h-[80vh] text-3xl bg-[center_top_-10rem]' style={{ backgroundImage: `url(${gal4})`}} > Upcoming events </div>
                {/* Links to signups */}
                <div className="min-h-[15vh] bg-red-700 flex flex-col sm:flex-row justify-evenly items-center gap-5">
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
                <div className="min-h-[100vh]">
                    <CalendarComponent />
                </div>
            </div>
        </Layout>
    )
}   