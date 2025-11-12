import type { Game } from "./Games";
import type { SocialLinks } from "./Social";
import { SocialPlatform } from "./Social"

export interface Person {
    id: number;
    name: string;
    pronouns?: string;
    role: string;
    location?: string;
    contact?: SocialLinks | Record<SocialPlatform, string>;
    bio: string;
    tag?: string;
    gamesPlayed?: Game[];
    imageUrl: string;
    panX?: number;
    panY?: number;
    scale?: number;
    leadership?: boolean;
}