interface WhoAreWeProps {
    photo: string;
    photoAlt?: string;
    headDescription: string;
    footDescription: string;
}

export default function WhoAreWeSection ({photo, photoAlt, headDescription, footDescription}: WhoAreWeProps) {
    return (
            <div className="flex flex-row h-1/3 w-full translate-y-5 justify-center">
                <div className="flex flex-col">
                    <div className="m-5"> <h2 className="text-2xl">{headDescription}</h2></div>
                    <div className=""><img src={photo} alt={photoAlt} className="object-contain"></img></div>
                    <div><p className="mt-5 text-center">{footDescription}</p></div>
                </div>
            </div>
    )
}