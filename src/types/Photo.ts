export interface Photo {
    id: number;
    src: string;
    alt: string;
    description: string;
    offsetX?: number;
    offsetY?: number;
    scale?: number;
}