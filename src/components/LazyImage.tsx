import { useEffect, useRef, useState } from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
}

export default function LazyImage({ src, alt, className } : LazyImageProps) {
    const ref = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={ref}
            src={isVisible ? src: undefined}
            alt={alt}
            className={className}
        />
    )
}