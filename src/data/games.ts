import type { Game} from "../types/Games";

const games: Game[] = [
    {
        Title: "Street Fighter 6",
        Abbreviation: "SF6",
        Type: "Traditional Fighter",
    },
    {
        Title: "Tekken 8",
        ShortTitle: "T8",
        Type: "3D Fighter",
    },
    {
        Title: "Rivals of Aether",
        ShortTitle: "RoA",
        Type: "Platform Fighter",
    },
    {
        Title: "Guilty Gear: Strive",
        ShortTitle: "Strive",
        Abbreviation: "GGST",
        Type: "Anime Fighter",
    },
    {
        Title: "Super Smash Bros. Ultimate",
        ShortTitle: "Smash Ultimate",
        Abbreviation: "SSBU",
        Type: "Platform Fighter",
    },
    {
        Title: "Super Smash Bros. Melee",
        ShortTitle: "Smash Melee",
        Abbreviation: "SSBM",
        Type: "Platform Fighter",
    },
    {
        Title: "2XKO",
        Type: "Tag Fighter",
    },
    {
        Title: "Rivals of Aether 2",
        Abbreviation: "RoA2",
        Type: "Platform Fighter",
    },
    {
        Title: "Undernight In-Birth II Sys:Celeste",
        Abbreviation: "Uni2",
        Type: "Anime Fighter",
    },
    {
        Title: "Ultimate Marvel vs. Capcom 3",
        ShortTitle: "Marvel 3",
        Abbreviation: "UMvC3",
        Type: "Tag Fighter",
    },
    {
        Title: "Nen Impact",
        Type: "Tag Fighter",
    },
    {
        Title: "Dragon Ball FighterZ",
        Abbreviation: "DBFZ",
        Type: "Tag Fighter",
    },
    {
        Title: "Granblue Fantasy: Versus Rising",
        ShortTitle: "Granblue Versus",
        Abbreviation: "GBVS",
        Type: "Traditional Fighter",
    }
]

export const gamesMap = Object.fromEntries(games.map((g) => [g.Title, g]));
export default games;