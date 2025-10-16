import { lazy, Suspense } from 'react';
import dtr from '../assets/dtr.jpg'
import Layout from '../components/Layout';

const HomePageVideo = lazy(() => import ('../components/HomePageVideo'));
//import HomePageVideo from '../components/HomePageVideo';

function Home() {

    return (
        <Layout>
            <div className='bg-cover bg-center h-screen max-h-screen w-full flex flex-col justify-evenly items-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${dtr})`}}>
                <div className='m-4 bg-zinc-800 bg-opacity-90 p-5 rounded-lg'>
                    <h1 className='text-4xl font-bold text-white'> Rochester's Newest Fighting Game Home </h1>
                </div>
                <div className='bg-zinc-800 bg-opacity-60 rounded-lg h-1/2 px-10 flex flex-col justify-center items-center'>
                    <Suspense fallback={<p className='text-white'>Loading content...</p>}>
                        <HomePageVideo />
                    </Suspense>
                </div>
            </div>
        </Layout>
    )
}

export default Home;