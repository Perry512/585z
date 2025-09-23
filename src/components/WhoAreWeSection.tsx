import { Link } from "react-router-dom";

interface WhoAreWeProps {
    photo: string;
    photoAlt?: string;
    headDescription: string;
    footDescription: string;
    linkTo?: string;
}

export default function WhoAreWeSection ({photo, photoAlt, headDescription, footDescription, linkTo,}: WhoAreWeProps) {
    const content = (
            <div className="flex flex-row h-full w-full translate-y-5 justify-center hover:border-2 hover:rounded-3xl hover:shadow-2xl">
                <div className="flex flex-col">
                    <div className="m-5">
                        <h2 className="text-3xl font-bold text-white">{headDescription}</h2>
                    </div>
                    <div className="">
                        <img src={photo} alt={photoAlt} className="object-contain"/>
                    </div>
                    <div>
                        <p className="mt-5 text-center text-2xl text-white font-normal">{footDescription}</p>
                    </div>
                </div>
            </div>
    );
    return linkTo ? <Link to={linkTo}>{content}</Link> : content;
}