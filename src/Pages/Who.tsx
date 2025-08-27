import Layout from "../components/Layout";
import WhoAreWeSection from "../components/WhoAreWeSection";

function Who() {

    const discordLink = "https://media.discordapp.net/attachments/1019658872107057254/1409630053381439618/20250825_160506.jpg?ex=68ae13ca&is=68acc24a&hm=b21461db07245b2a8e7ae77b86239f9015b89c7fd88d265d8a7dbba4f07e40ca&=&format=webp&width=1032&height=688"
    return (
        <Layout>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div>
                    <h1 className='text-3xl font-bold text-white'> Who Are We? </h1>
                    <p className='text-white'> We play video games in Innonvation tower sometimes for money </p>
                </div>
                <div className="flex flex-col items-center md:flex-row gap-5">
                    <WhoAreWeSection photo={discordLink} headDescription="Section 1" footDescription="feet"/>
                    <WhoAreWeSection photo={discordLink} headDescription="Section 2" footDescription="feet"/>
                    <WhoAreWeSection photo={discordLink} headDescription="Section 3" footDescription="feet"/>
                    
                </div>
            </div>
            
        </Layout>
    )
}

export default Who;