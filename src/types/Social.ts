export const enum SocialPlatform {
    Discord = "Discord",
    Bluesky = "Bluesky",
    YouTube = "YouTube",
    Twitch = "Twitch",
    X = "X",
    Email = "Email",
    TikTok = "TikTok",
    Instagram = "Instagram",
}

export type SocialLinks = Partial<Record<SocialPlatform, string>>;