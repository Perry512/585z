import Layout from "../components/Layout";
import WhoAreWeSection from "../components/WhoAreWeSection";
import { useFadeInOnScroll } from "../hooks/UseFadeInOnScroll";

import asset1 from "../assets/asset1.png"
import asset2 from "../assets/asset2.png"
import asset3 from "/photoGal/galG.jpg"

function Who() {

    const headerFade = useFadeInOnScroll<HTMLDivElement>();
    const fadeIn1 = useFadeInOnScroll<HTMLDivElement>(0);
    const fadeIn2 = useFadeInOnScroll<HTMLDivElement>(200);
    const fadeIn3 = useFadeInOnScroll<HTMLDivElement>(400);

    return (
        <Layout>
            <div ref={headerFade.ref} className={headerFade.className} style={headerFade.style} />
            <div 
                className='flex flex-col items-center justify-center' style={{
                backgroundPosition: "50% 20%"
            }}>
                <div ref={fadeIn1.ref} className={`${fadeIn1.className}`}>
                    <div className="w-full h-1/5 border-b-2 p-5">
                        <h1 className='text-4xl font-bold text-white'> Who Are We? </h1>
                        <p className='text-white'> We play video games in Innonvation tower sometimes for money </p>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:flex-row gap-5 lg:px-10 mb-20">
                    <div ref={fadeIn1.ref} className={`${fadeIn1.className}`}>
                        <WhoAreWeSection 
                            photo={asset3} 
                            headDescription="The 585FighterZ" 
                            footDescription="Learn more about our team!"
                            desktopPhotoSize="h-[40vh] w-full"
                            sectionSize="w-[29vw]"
                            linkTo="/aboutUs"
                        />
                    </div>
                    <div ref={fadeIn2.ref} className={`${fadeIn2.className}`}>
                        <WhoAreWeSection 
                            photo={asset2} 
                            headDescription="Photo Gallery" 
                            footDescription="See the fun and games you've missed" 
                            linkTo="/gallery"
                            desktopPhotoSize="h-[49vh] w-full"
                            sectionSize="w-[35vw]"
                        />
                    </div> 
                    <div ref={fadeIn3.ref} className={`${fadeIn3.className}`}>
                        <WhoAreWeSection 
                            photo={asset1} 
                            headDescription="Calendar" 
                            footDescription="Find out when and where to find us" 
                            linkTo="/calendar"
                            desktopPhotoSize="h-[40vh] w-full"
                            sectionSize="w-[29vw]"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Who;