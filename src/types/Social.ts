export const enum SocialPlatform {
    Discord = "Discord",
    Bluesky = "Bluesky",
    YouTube = "YouTube",
    Twitch = "Twitch",
    X = "X",
}

export type SocialLinks = Partial<Record<SocialPlatform, string>>;