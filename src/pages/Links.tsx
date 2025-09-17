import Layout from "../components/Layout";

function Links() {
    return (
        <Layout> 
            <div className='p-6 flex flex-row items-center justify-center -translate-x-3'>
                <h1 className='text-3xl font-bold text white flex flex-row mx-5'> Links: </h1>
                <ul className='text-white mt-4 flex flex-row space-x-5 -translate-y-1'>
                    <li><a href="https://start.gg/letsroc" className='text-blue-400 hover:underline'> StartGG </a></li>
                    <li><a href="https://discord.gg/cByf5TcWFs" className='text-blue-400 hover:underline'> Discord </a></li>
                    <li><a href="https://www.twitch.tv/585fighterz" className='text-blue-400 hover:underline'> Twitch </a></li>
                </ul>
            </div>
        </Layout>
    )
}

export default Links;