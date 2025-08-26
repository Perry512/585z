import Layout from "./Layout";

// const photos = {
//     discordLink: "https://media.discordapp.net/attachments/1019658872107057254/1409630053381439618/20250825_160506.jpg?ex=68ae13ca&is=68acc24a&hm=b21461db07245b2a8e7ae77b86239f9015b89c7fd88d265d8a7dbba4f07e40ca&=&format=webp&width=1032&height=688",
// }


interface WhoAreWeProps {
    photo: string;
    photoAlt?: string;
    headDescription: string;
    footDescription: string;
}

export default function WhoAreWeSection ({photo, photoAlt, headDescription, footDescription}: WhoAreWeProps) {
    return (
        <Layout>
            <div className="flex flex-row h-1/3 w-full p-10 translate-y-5 justify-center">
                <div className="flex flex-col bg-amber-300">
                    <div className="m-5"> <h2 className="text-2xl">{headDescription}</h2></div>
                    <div className=""><img src={photo} alt={photoAlt} className="object-contain"></img></div>
                    <div><p className="mt-5">{footDescription}</p></div>
                </div>
            </div>
        </Layout>
    )
}