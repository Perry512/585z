import { useState, useEffect } from 'react';

export default function HomePageVideo() {
    const [parent, setParent] = useState("");

    useEffect(() => {
        setParent(window.location.hostname);
    }, [])
    
    if (!parent) return null;
    return(
        <div className='h-full w-full flex flex-col items-center justify-center'>
            {/* <iframe 
                src={`https://player.twitch.tv/?video=2547779457&parent=${parent}&muted=true&autoplay=true`}
                height="90%"
                width="90%"
                allow="autoplay"
            /> */}
            <iframe width="728" height="409" src="https://www.youtube-nocookie.com/embed/0mNF14IH4Mg?si=IT88au97B08BG8b4&amp;start=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}