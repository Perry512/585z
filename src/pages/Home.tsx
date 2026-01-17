import { lazy, Suspense } from 'react';
import barBackground from '/photoGal/galE.jpg'
import Layout from '../components/Layout';

const HomePageVideo = lazy(() => import ('../components/HomePageVideo'));
//import HomePageVideo from '../components/HomePageVideo';

function Home() {

    return (
        <Layout>
            <div className='bg-cover bg-center h-screen max-h-screen w-full flex flex-col justify-evenly items-center bg-no-repeat bg-fixed' style={{ backgroundImage: `url(${barBackground})`}}>
                <div className='m-4 bg-zinc-800 bg-opacity-90 p-5 rounded-lg'>
                    <h1 className='text-4xl font-bold text-white'> Rochester's Premiere Fighting Game Scene </h1>
                </div>
                <div className='h-1/2 px-10 flex flex-col justify-center items-center'>
                    <Suspense fallback={<p className='text-white'>Loading content...</p>}>
                        <HomePageVideo />
                    </Suspense>
                </div>
            </div>
        </Layout>
    )
}

export default Home;