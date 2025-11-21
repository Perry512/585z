import type { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    maxHeight?: string; // in vh; "10vh"
};

export default function ModalImageBackground({ photo, maxHeight = "100vh"}: Props) {
    const panX = photo.panX ?? 50;
    const panY = photo.panY ?? 50;
    const scale = photo.scale ?? 1;

    const backgroundSize = `${scale * 100}%`;
    const backgroundPosition = `${panX}% ${panY}%`;

    return (
        <div className="w-[100vw] flex items-center justify-center">
            <div 
                aria-hidden={!photo.alt}
                style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: maxHeight,
                    backgroundImage: `url(${photo.src})`,
                    backgroundPosition,
                    backgroundSize,
                    backgroundRepeat: "no-repeat",
                    borderRadius: "8px",
                    overflow: "hidden",
                }}
                className="shadow-lg"
            />
        </div>
    )
}