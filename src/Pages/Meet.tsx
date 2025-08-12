import Layout from "../components/Layout";
import theClobberImage from '/src/assets/TheClobber.png';

function Meet() {
    return (
        <Layout>
            <div className="min-h-screen grid grid-rows-4 gap-5 p-4 bg-red-700">
                {/* Top row */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="bg-gray-700 col-span-3 flex flex-col justify-start items-around h-full">
                        <div className="h-1/5 w-full mx-3 p-3 flex flex-row bg-blue-400">
                            <div className='w-full max-h-1/5'>
                                <h1 className='text-3xl font-bold text-black flex flex-col justify-start items-start'> The Clobber </h1>
                            </div>
                        </div>
                         <div className="h-1 w-11/12 bg-grey-900 "></div>
                        <div className="h-full w-full bg-green-400 p-4">
                            <div className="h-1/4 bg-blue-400 flex flex-col items-start translate-x-5 text-black font-bold text-xl"> Social Media Guru </div>
                            <div className="h-3/4 bg-yellow-600 flex flex-col items-start"> <p className="text-lg"> <br/>He clobs on his ster til it's time <br/> Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube </p></div>
                        </div>
                    </div>
                    {/* PFP */}
                    <div className="grid grid-rows-2 h-full justify-center items-center">
                        <div className="col-span-1 flex flex-col justify-center items-center">
                            <img src={theClobberImage} className="h-full"></img> 
                        </div>
                        <div> @'s </div>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="grid grid-cols-4 gap-4 w-full h-40 max-h-1/5">
                    <div className="bg-blue-300 col-span-1">
                        <img src={theClobberImage}></img> 
                    </div> 
                    <div className="bg-gray-600 col-span-3 flex felx-col justify-center items-center"> 
                        <h1 className='text-3xl font-bold text-black'> The Clobber </h1>
                    </div> 
                </div>

                {/* 3rd row */}
                <div className="grid grid-cols-4 gap-4 w-full h-40">
                    <div className="bg-gray-600 col-span-3 flex felx-col justify-center items-center"> 
                        <h1 className='text-3xl font-bold text-black'> The Clobber </h1>
                    </div> 
                    <div className="bg-blue-300 col-span-1">
                        <img src={theClobberImage}></img> 
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-4 gap-4 w-full h-40">
                    <div className="bg-blue-300 col-span-1">
                        <img src={theClobberImage}></img> 
                    </div> 
                    <div className="bg-gray-600 col-span-3 flex felx-col justify-center items-center"> 
                        <h1 className='text-3xl font-bold text-black'> The Clobber </h1>
                    </div> 
                </div>

            </div>
        </Layout>
    )
}

export default Meet;