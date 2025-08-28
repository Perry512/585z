export default function HomePageVideo() {
    return(
        <div className='h-full w-full flex flex-col items-center justify-center'>
            <iframe 
                src="https://player.twitch.tv/?video=2547779457&parent=localhost&muted=true&autoplay=true"
                height="90%"
                width="90%"
                allowFullScreen>
            </iframe>
        </div>
    )
}