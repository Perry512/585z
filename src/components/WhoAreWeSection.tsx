import { Link } from "react-router-dom";

interface WhoAreWeProps {
    photo: string;
    photoAlt?: string;
    headDescription: string;
    footDescription: string;
    linkTo?: string;
    desktopPhotoSize?: string;
    mobilePhotoSize?: string;
}

export default function WhoAreWeSection ({
    photo, 
    photoAlt, 
    headDescription, 
    footDescription, 
    linkTo,
    desktopPhotoSize = "w-[25vw] h-[30vh]",
    mobilePhotoSize = "w-full"
}: WhoAreWeProps) {
    const content = (
            <div className="flex flex-row h-full sm:w-[75vw] md:w-[30vw] min-h-[60vh] translate-y-5 justify-center hover:border-2 hover:rounded-3xl hover:shadow-2xl">
                <div className="flex flex-col justify-around">
                    <div className="flex flex-col m-5 align-top items-top">
                        <h2 className="text-3xl font-bold text-white">{headDescription}</h2>
                    </div>
                    <div className="flex flex-col align-center items-center justify-center">
                        <img 
                            src={photo} 
                            alt={photoAlt} 
                            className={`object-fit ${mobilePhotoSize} md:${desktopPhotoSize}`}/>
                    </div>
                    <div className="flex flex-col align-bottom">
                        <p className="mt-5 text-center text-2xl text-white font-normal">{footDescription}</p>
                    </div>
                </div>
            </div>
    );
    return linkTo ? <Link to={linkTo}>{content}</Link> : content;
}