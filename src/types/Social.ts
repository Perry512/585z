export const enum SocialPlatform {
    Discord = "Discord",
    Bluesky = "Bluesky",
    YouTube = "YouTube",
    Twitch = "Twitch",
    X = "X",
    Email = "Email",
    TikTok = "TikTok",
}

export type SocialLinks = Partial<Record<SocialPlatform, string>>;