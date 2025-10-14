import { useState, useEffect } from 'react';

export default function HomePageVideo() {
    const [parent, setParent] = useState("");

    useEffect(() => {
        setParent(window.location.hostname);
    }, [])
    
    if (!parent) return null;
    return(
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <iframe 
                src={`https://player.twitch.tv/?video=2547779457&parent=${parent}&muted=true&autoplay=true`}
                height="90%"
                width="90%"
                allow="autoplay"
            />
        </div>
    )
}