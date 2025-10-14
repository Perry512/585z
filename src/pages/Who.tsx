import Layout from "../components/Layout";
import WhoAreWeSection from "../components/WhoAreWeSection";
import { useFadeInOnScroll } from "../hooks/UseFadeInOnScroll";

import asset1 from "../assets/asset1.png"
import asset2 from "../assets/asset2.png"
// import asset3 from "../assets/asset3.png"

function Who() {

    const fadeIn1 = useFadeInOnScroll();
    const fadeIn2 = useFadeInOnScroll();
    const fadeIn3 = useFadeInOnScroll();

    return (
        <Layout>
            <div className='flex flex-col items-center justify-center'>
                <div ref={fadeIn1.ref} className={`${fadeIn1.className} delay-0`}>
                    <div className="w-full h-1/5 border-b-2 p-5">
                        <h1 className='text-4xl font-bold text-white'> Who Are We? </h1>
                        <p className='text-white'> We play video games in Innonvation tower sometimes for money </p>
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-5 px-10 mb-20">
                    <div ref={fadeIn1.ref} className={`${fadeIn1.className} delay-0`}>
                        <WhoAreWeSection photo={asset1} headDescription="Section 1" footDescription="This is a long piece of text so I can test how the overflow works"/>
                    </div>
                    <div ref={fadeIn2.ref} className={`${fadeIn2.className} delay-300`}>
                        <WhoAreWeSection photo={asset2} headDescription="Photo Gallery" footDescription="See the fun and games you've missed" linkTo="/gallery"/>
                    </div> 
                    <div ref={fadeIn3.ref} className={`${fadeIn3.className} delay-600`}>
                        <WhoAreWeSection photo={asset1} headDescription="Calendar" footDescription="Find out when and where to find us" linkTo="/calendar"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Who;