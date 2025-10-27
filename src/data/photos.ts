import type { Photo } from "../types/Photo";
import metadata from "../assets/photoGal/metadata.json";

const images = import.meta.glob("../assets/photoGal/*.{png,jpg,jpeg,webp,JPG}", { eager: true });

export const photos: Photo[] = Object.entries(images).map(([path, module], index) => {
    const fileName = path.split("/").pop()!;
    const meta = (metadata as Record<string, { alt?: string; description?: string}>)[fileName] ?? {};

    return { 
        id: index + 1,
        src: (module as { default: string}).default,
        alt: meta.alt ?? fileName,
        description: meta.description ?? "",
    };
});