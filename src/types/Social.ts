export enum Social {
    Discord = "Discord",
    Bluesky = "Bluesky",
    YouTube = "YouTube",
    Twitch = "Twitch",
    X = "X",
}

export type Social = Partial<Record<Social, string>>;