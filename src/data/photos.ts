import type { Photo } from "../types/Photo";

export async function loadPhotos(): Promise<Photo[]> {
    const base = import.meta.env.BASE_URL + "photoGal/";

    const [fileRes, metaRes] = await Promise.all([
        fetch(`${base}photos.json`),
        fetch(`${base}metadata.json`)
    ]);

    if (!fileRes.ok) {
        throw new Error("Failed to load photo metadata")
    }

    const files = await fileRes.json() as string[];

    const metadata= metaRes.ok
        ? await metaRes.json()
        : {};

    return files.map((fileName, index) => {
        const meta = metadata[fileName] ?? {};
    

        return { 
            id: index + 1,
            src: `${base}${fileName}`,
            alt: meta.alt ?? fileName,
            description: meta.description ?? "",   
        };
    });
};