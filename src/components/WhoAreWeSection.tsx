import { Link } from "react-router-dom";

interface WhoAreWeProps {
    photo: string;
    photoAlt?: string;
    headDescription: string;
    footDescription: string;
    linkTo?: string;
    desktopPhotoSize?: string;
    mobilePhotoSize?: string;
    sectionSize?: string;
}

export default function WhoAreWeSection ({
    photo, 
    photoAlt, 
    headDescription, 
    footDescription, 
    linkTo,
    desktopPhotoSize = "w-[25vw] h-[30vh]",
    mobilePhotoSize = "w-full",
    sectionSize = "w-[25vw]"
}: WhoAreWeProps) {
    const content = (
            <div className={`flex flex-row h-full sm:w-[75vw] min-h-[70vh] lg:${sectionSize} translate-y-5 justify-center hover:scale-[1.05] transition delay-100  duration-200`}>
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col m-5 align-top items-top">
                        <h2 className="text-3xl font-bold text-white">{headDescription}</h2>
                    </div>
                    <div className="flex flex-col align-center items-center justify-center">
                        <img 
                            src={photo} 
                            alt={photoAlt} 
                            className={`object-cover ${mobilePhotoSize} md:${desktopPhotoSize}`}/>
                    </div>
                    <div className="">
                        <p className="mt-5 text-center text-2xl text-white font-normal">{footDescription}</p>
                    </div>
                </div>
            </div>
    );
    return linkTo ? <Link to={linkTo}>{content}</Link> : content;
}