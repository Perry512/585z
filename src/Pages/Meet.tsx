import Layout from "../components/Layout";
import theClobberImage from '/src/assets/TheClobber.png';
import SocialLink from '../components/SocialLink';

function Meet() {

    return (
        <Layout>
            <div className="min-h-screen grid grid-rows-4 gap-10 p-20 bg-red-700">
                {/* Top row */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="bg-zinc-800 col-span-3 flex flex-col justify-start items-around h-full rounded-xl">
                        <div className="h-1/5 w-full mx-3 my-2 p-3 flex flex-row justify-center">
                            <div className='w-full max-h-1/5 flex flex-row pb-10 ml-7 mt-2 '>
                                <h1 className="text-4xl text-zinc-400 font-bold"> 585z &nbsp; </h1> <h1 className="text-4xl text-zinc-400"> | &nbsp; </h1> <h1 className='text-4xl font-bold text-zinc-200 flex flex-col justify-start items-start'> <em>"The Clobber"</em> </h1> <h2 className="text-4xl text-gray-400"> &nbsp; | </h2> <h2 className="text-3xl text-zinc-400 translate-y-1"> &nbsp; Aidan Seaburg </h2>
                            </div>
                        </div>
                        {/* Line */}
                        <div className="h-1 w-full bg-zinc-600"></div>
                        {/* Inside info */}
                        <div className="h-full w-full p-4 rounded-b-lg mr-10 bg-zinc-900">
                            <div className="max-h-1/4 bg-zinc-900 flex flex-col items-start translate-x-5 text-zinc-400 font-bold text-xl justify-center w-fit overflow-hidden "> <h2 className="italic text-2xl underline"> Social Media Guru </h2></div>
                            <div className="h-1 w-full ">  </div>
                            <div className="h-3/4 flex flex-col items-start px-5"> <p className="text-xl text-left"> <br/><em> He "clobs" on his "ster" 'til it's time </em><br/> <br/> Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube <br/> </p></div>
                        </div>
                    </div>
                    {/* PFP */}
                    <div className="flex flex-col h-full w-full justify-center items-start ">
                            <div className="h-full pt-5 bg-zinc-800 rounded-lg w-4/5">
                                <div className="flex flex-col justify-center items-center h-4/5">
                                    <img src={theClobberImage} className="w-3/5"></img> 
                                </div>
                                <div className="h-1/5 bg-zinc-900 b-top-zinc-800 flex flex-row items-center justify-around rounded-b-lg"> 
                                    {/* Links row */}
                                    <div className="w-11/12 flex flex-row items-center justify-center gap-px overflow-y-auto"> 
                                        <SocialLink mediaType="SiX" usersName="The Clobber" usersLink="https://visdeurbel.nl/en/" />
                                        <div> &nbsp; &nbsp; </div>
                                        <SocialLink mediaType="SiTwitch" usersName="The Clobber" usersLink="https://visdeurbel.nl/en/"/>
                                        <SocialLink mediaType="SiStartdotgg" usersName="The Clobber" />
                                    </div> 
                                </div>
                        </div>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="grid grid-cols-4 gap-4 w-full h-40 max-h-1/5">
                    {/* PFP */}
                    <div className="flex flex-col h-full w-full justify-center items-end">
                            <div className="h-full pt-5 bg-zinc-800 rounded-lg w-4/5">
                                <div className="flex flex-col justify-center items-center h-4/5">
                                    <img src={theClobberImage} className="w-3/5"></img> 
                                </div>
                                <div className="h-1/5 bg-zinc-900 b-top-zinc-800 flex flex-row items-center justify-around rounded-b-lg"> 
                                    {/* Links row */}
                                    <div className="w-11/12 flex flex-row items-center justify-center gap-px"> 
                                        <SocialLink mediaType="SiX" usersName="The Clobber" usersLink="https://visdeurbel.nl/en/" />
                                        <div> &nbsp; &nbsp; </div>
                                        <SocialLink mediaType="SiTwitch" usersName="The Clobber" usersLink="https://visdeurbel.nl/en/" />
                                    </div> 
                                </div>
                        </div>
                    </div>
                    {/* About */}
                    <div className="bg-zinc-800 col-span-3 flex flex-col justify-start items-around h-full rounded-xl">
                        <div className="h-1/5 w-full mx-3 my-2 p-3 flex flex-row justify-center">
                            <div className='w-full max-h-1/5 flex flex-row pb-10 ml-7 mt-2 '>
                                <h1 className="text-4xl text-zinc-400 font-bold"> 585z &nbsp; </h1> <h1 className="text-4xl text-zinc-400"> | &nbsp; </h1> <h1 className='text-4xl font-bold text-zinc-200 flex flex-col justify-start items-start'> <em>"The Clobber"</em> </h1> <h2 className="text-4xl text-gray-400"> &nbsp; | </h2> <h2 className="text-3xl text-zinc-400 translate-y-1"> &nbsp; Aidan Seaburg </h2>
                            </div>
                        </div>
                        {/* Line */}
                        <div className="h-1 w-full bg-zinc-600"></div>
                        {/* Inside info */}
                        <div className="h-full w-full p-4 rounded-b-lg mr-10 bg-zinc-900">
                            <div className="max-h-1/4 bg-zinc-900 flex flex-col items-start translate-x-5 text-zinc-400 font-bold text-xl justify-center w-fit overflow-hidden "> <h2 className="italic text-2xl underline"> Social Media Guru </h2></div>
                            <div className="h-1 w-full ">  </div>
                            <div className="h-3/4 flex flex-col items-start px-5"> <p className="text-xl text-left"> <br/><em> He "clobs" on his "ster" 'til it's time </em><br/> <br/> Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube <br/> </p></div>
                        </div>
                    </div>
                </div>

                {/* 3rd row */}
                <div className="grid grid-cols-4 gap-4 w-full">
                    <div className="bg-zinc-800 col-span-3 flex flex-col justify-start items-around h-full rounded-xl">
                        <div className="h-1/5 w-full mx-3 my-2 p-3 flex flex-row justify-center">
                            <div className='w-full max-h-1/5 flex flex-row pb-10 ml-7 mt-2 '>
                                <h1 className="text-4xl text-zinc-400 font-bold"> 585z &nbsp; </h1> <h1 className="text-4xl text-zinc-400"> | &nbsp; </h1> <h1 className='text-4xl font-bold text-zinc-200 flex flex-col justify-start items-start'> <em>"The Clobber"</em> </h1> <h2 className="text-4xl text-gray-400"> &nbsp; | </h2> <h2 className="text-3xl text-zinc-400 translate-y-1"> &nbsp; Aidan Seaburg </h2>
                            </div>
                        </div>
                        {/* Line */}
                        <div className="h-1 w-full bg-zinc-600"></div>
                        {/* Inside info */}
                        <div className="h-full w-full p-4 rounded-b-lg mr-10 bg-zinc-900">
                            <div className="max-h-1/4 bg-zinc-900 flex flex-col items-start translate-x-5 text-zinc-400 font-bold text-xl justify-center w-fit overflow-hidden "> <h2 className="italic text-2xl underline"> Social Media Guru </h2></div>
                            <div className="h-1 w-full ">  </div>
                            <div className="h-3/4 flex flex-col items-start px-5"> <p className="text-xl text-left"> <br/><em> He "clobs" on his "ster" 'til it's time </em><br/> <br/> Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube <br/> </p></div>
                        </div>
                    </div>
                    {/* PFP */}
                    <div className="flex flex-col h-full w-full justify-center items-start ">
                        <div className="h-full pt-5 bg-zinc-800 rounded-lg w-4/5">
                            <div className="flex flex-col justify-center items-center h-4/5">
                                <img src={theClobberImage} className="w-3/5"></img> 
                            </div>
                            <div className="h-1/5 bg-zinc-900 b-top-zinc-800 flex flex-row items-center justify-around rounded-b-lg"> 
                                {/* Links row */}
                                <div className="w-11/12 flex flex-row items-center justify-center gap-px"> 
                                <SocialLink mediaType="SiX" usersName="@The Clobber" />
                                <div> &nbsp; &nbsp; </div>
                                <SocialLink mediaType="SiTwitch" usersName="@The Clobber" />
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-4 gap-4 w-full h-40 max-h-1/5">
                    {/* PFP */}
                    <div className="flex flex-col h-full w-full justify-center items-end">
                            <div className="h-full pt-5 bg-zinc-800 rounded-lg w-4/5">
                                <div className="flex flex-col justify-center items-center h-4/5">
                                    <img src={theClobberImage} className="w-3/5"></img> 
                                </div>
                                <div className="h-1/5 bg-zinc-900 b-top-zinc-800 flex flex-row items-center justify-around rounded-b-lg"> 
                                    {/* Links row */}
                                    <div className="w-11/12 flex flex-row items-center justify-center gap-px"> 
                                    <SocialLink mediaType="SiX" usersName="@The Clobber" />
                                    <div> &nbsp; &nbsp; </div>
                                    <SocialLink mediaType="SiTwitch" usersName="@The Clobber" />
                                    </div> 
                                </div>
                        </div>
                    </div>
                    {/* About */}
                    <div className="bg-zinc-800 col-span-3 flex flex-col justify-start items-around h-full rounded-xl">
                        <div className="h-1/5 w-full mx-3 my-2 p-3 flex flex-row justify-center">
                            <div className='w-full max-h-1/5 flex flex-row pb-10 ml-7 mt-2 '>
                                <h1 className="text-4xl text-zinc-400 font-bold"> 585z &nbsp; </h1> <h1 className="text-4xl text-zinc-400"> | &nbsp; </h1> <h1 className='text-4xl font-bold text-zinc-200 flex flex-col justify-start items-start'> <em>"The Clobber"</em> </h1> <h2 className="text-4xl text-gray-400"> &nbsp; | </h2> <h2 className="text-3xl text-zinc-400 translate-y-1"> &nbsp; Aidan Seaburg </h2>
                            </div>
                        </div>
                        {/* Line */}
                        <div className="h-1 w-full bg-zinc-600"></div>
                        {/* Inside info */}
                        <div className="h-full w-full p-4 rounded-b-lg mr-10 bg-zinc-900">
                            <div className="max-h-1/4 bg-zinc-900 flex flex-col items-start translate-x-5 text-zinc-400 font-bold text-xl justify-center w-fit overflow-hidden "> <h2 className="italic text-2xl underline"> Social Media Guru </h2></div>
                            <div className="h-1 w-full ">  </div>
                            <div className="h-3/4 flex flex-col items-start px-5"> <p className="text-xl text-left"> <br/><em> He "clobs" on his "ster" 'til it's time </em><br/> <br/> Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube <br/> </p></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                    <div className="bg-zinc-800 col-span-1 md:col-span-3 flex flex-col justify-start items-center md:items-start h-full rounded-xl">
                        <div className="w-full mx-3 my-2 p-3 flex flex-col md:flex-row justify-center md:justify-start">
                            <h1 className="text-3xl md:text-4xl text-zinc-400 font-bold"> 585z &nbsp; </h1>
                            <h1 className="text-3xl md:text-4xl text-zinc-400"> | &nbsp; </h1>
                            <h1 className='text-3xl md:text-4xl font-bold text-zinc-200 flex flex-col justify-start items-start'> <em>"The Clobber"</em> </h1>
                            <h2 className="text-3xl md:text-4xl text-gray-400"> &nbsp; | </h2>
                            <h2 className="text-2xl md:text-3xl text-zinc-400 translate-y-1"> &nbsp; Aidan Seaburg </h2>
                        </div>
                        <div className="h-1 w-full bg-zinc-600"></div>
                        <div className="h-full w-full p-4 rounded-b-lg mr-10 bg-zinc-900">
                            <div className="max-h-1/4 bg-zinc-900 flex flex-col items-start translate-x-5 text-zinc-400 font-bold text-xl justify-center w-fit overflow-hidden">
                                <h2 className="italic text-2xl underline"> Social Media Guru </h2>
                            </div>
                            <div className="h-1 w-full"></div>
                            <div className="h-3/4 flex flex-col items-start px-5">
                                <p className="text-lg md:text-xl text-left">
                                    <br /><em> He "clobs" on his "ster" 'til it's time </em><br /><br />
                                    Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube <br />
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* PFP */}
                    <div className="flex flex-col h-full w-full justify-center items-center md:items-start">
                        <div className="h-full pt-5 bg-zinc-800 rounded-lg w-4/5">
                            <div className="flex flex-col justify-center items-center h-4/5">
                                <img src={theClobberImage} className="w-3/5 md:w-4/5" alt="The Clobber" />
                            </div>
                            <div className="h-1/5 bg-zinc-900 flex flex-row items-center justify-around rounded-b-lg">
                                <div className="w-11/12 flex flex-row items-center justify-center gap-2">
                                    <SocialLink mediaType="SiStartdotgg" usersName="@The Clobber" />
                                    <SocialLink mediaType="SiTwitch" usersName="@The Clobber" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Meet;