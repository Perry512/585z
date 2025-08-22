import dtr from '../assets/dtr.jpg'

function Home() {

    return (
    <>
        <div className='bg-cover bg-center h-screen max-h-screen w-full flex flex-col justify-evenly items-center' style={{ backgroundImage: `url(${dtr})`}}>
            <div className='m-4 bg-gray-800 bg-opacity-90 p-5 rounded-lg'>
                <h1 className='text-4xl font-bold text-white'> Rochester's Newest Fighting Game Home </h1>
            </div>
            <div className='bg-gray-800 bg-opactiy-90 p-t rounded-lg h-1/2 w-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold'>CONTENT GOES HERE</h1>
            </div>
        </div>
    </>
    )
}

export default Home;