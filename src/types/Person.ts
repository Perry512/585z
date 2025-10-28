import type { Game } from "./Games";

export interface Person {
    id: number;
    name: string;
    pronouns?: string;
    role: string;
    location: string;
    contact?: string;
    bio: string;
    tag?: string;
    gamesPlayed?: Game[];
    imageUrl: string;
    panX?: number;
    panY?: number;
    scale?: number;
}