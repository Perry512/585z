import Layout from "./Layout"
import hexes from "../assets/Hex_Example.png"

export default function DiscordWidget() {
    
    return (
        <Layout>
            <section className="h-[100vh] bg-black py-16 flex justify-center">
                <div 
                    className="w-full max-w-6xl px-4 flex flex-col lg:flex-row items-center gap-10"
                    style={{
                        backgroundImage: `url(${hexes})`,
                        backgroundPosition: "50% 20%",
                }}>

                    <div className="text-white max-w-md text-center lg:text-left">
                        <h2>
                            Join Us
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Come play sets and stay up to date with our announcements and latest tourneys by joining our server.
                        </p>
                        <a
                            href="https://discord.gg/DcvsWzb"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-md font-semibold"
                        >
                            Join Discord
                        </a>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://discord.com/widget?id=484510910942150668&theme=dark"
                            width="350"
                            height="500"
                            allowTransparency={true}
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            title="Discord Server"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}