import Layout from "../components/Layout";
import WhoAreWeSection from "../components/WhoAreWeSection";
import { useFadeInOnScroll } from "../components/UseFadeInOnScroll";

function Who() {

    const fadeIn1 = useFadeInOnScroll();
    const fadeIn2 = useFadeInOnScroll();
    const fadeIn3 = useFadeInOnScroll();

    const discordLink1 = "https://media.discordapp.net/attachments/1019658872107057254/1409630053381439618/20250825_160506.jpg?ex=68ae13ca&is=68acc24a&hm=b21461db07245b2a8e7ae77b86239f9015b89c7fd88d265d8a7dbba4f07e40ca&=&format=webp&width=1032&height=688"
    const discordLink2 = "https://media.discordapp.net/attachments/1335808652178751498/1349457595705983040/IMG_0842.JPG?ex=68b15092&is=68afff12&hm=33d264eb2155d693c8bd719d080e2468fb95a53ede3e44e9c8d050c1c16974b9&=&format=webp&width=1253&height=835"
    const discordLink3 = "https://media.discordapp.net/attachments/1335808652178751498/1346161111493246986/IMG_0817.JPG?ex=68b1d8bb&is=68b0873b&hm=e35bac45e2a251765ad13c009dca8b404a166d6697c59df73f03e802d1cf0f41&=&format=webp&width=1253&height=835"

    return (
        <Layout>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className="w-full h-1/5">
                    <h1 className='text-3xl font-bold text-white'> Who Are We? </h1>
                    <p className='text-white'> We play video games in Innonvation tower sometimes for money </p>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-5 px-10">
                    <div ref={fadeIn1.ref} className={`${fadeIn1.className} delay-0`}>
                        <WhoAreWeSection photo={discordLink1} headDescription="Section 1" footDescription="This is a long piece of text so I can test how the overflow works"/>
                    </div>
                    <div ref={fadeIn2.ref} className={`${fadeIn2.className} delay-300`}>
                        <WhoAreWeSection photo={discordLink2} headDescription="Section 2" footDescription="This is a long piece of text so I can test how the overflow works"/>
                    </div> 
                    <div ref={fadeIn3.ref} className={`${fadeIn3.className} delay-600`}>
                        <WhoAreWeSection photo={discordLink3} headDescription="Section 3" footDescription="This is a long piece of text so I can test how the overflow works"/>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default Who;