export interface Photo {
    id: number;
    src: string;
    alt: string;
    description: string;
    panX?: number;
    panY?: number;
    scale?: number;
}