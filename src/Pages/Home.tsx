import dtr from '../assets/dtr.jpg'
import Layout from '../components/Layout';

function Home() {

    return (
        <Layout>
            <div className='bg-cover bg-center h-screen max-h-screen w-full flex flex-col justify-evenly items-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${dtr})`}}>
                <div className='m-4 bg-gray-800 bg-opacity-90 p-5 rounded-lg'>
                    <h1 className='text-4xl font-bold text-white'> Rochester's Newest Fighting Game Home </h1>
                </div>
                <div className='bg-gray-800 bg-opacity-60 rounded-lg h-1/2 w-1/2 flex flex-col justify-center items-center'>
                    <iframe 
                        src="https://player.twitch.tv/?video=2547779457&parent=localhost&muted=true&autoplay=true"
                        height="80%"
                        width="80%"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </Layout>
    )
}

export default Home;