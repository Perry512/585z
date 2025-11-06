import { useEffect, useLayoutEffect } from "react";
import { useMap } from "react-leaflet";

interface Props {
    isOpen: boolean;
}

export default function ResizeMapOnModalOpen({ isOpen }: Props) {
    const map = useMap();

    useLayoutEffect(() => {
        if(isOpen) {
            const timeout = setTimeout(() => {
                map.invalidateSize();
                setTimeout(() => map.invalidateSize(), 200);
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [isOpen, map]);

    useEffect(() => {
        const handleResize = () => map.invalidateSize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [map]);

    return null;
}