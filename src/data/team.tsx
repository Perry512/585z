import type { Person } from "../types/Person";
import { SocialPlatform } from "../types/Social";
import games from "./games";
import TheClobber from "../assets/TheClobber.png";
import JoeIdaho from "../assets/profilePictures/joeidaho.jpg";
import MadWRLD from "../assets/profilePictures/madwrld.jpg";
import Shotglass from "../assets/profilePictures/shotglass.png";
import GhettoSag3 from "../assets/profilePictures/ghettosag3.jpeg";
import Skar from "../assets/profilePictures/skar.jpg";
import TheClobster from "../assets/profilePictures/clobster.jpg"
import Gibbs from "../assets/profilePictures/gibbs.png";
import Tyger from "../assets/profilePictures/tyger.jpg"

export const team: Person[] = [
    {
        id:1,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test1",
        imageUrl: TheClobber,
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
        ]
    },
    {
        id:2,
        name: "Cullen",
        tag: "Joe Idaho",
        pronouns: "He/Him",
        role: "Team Liason/TO",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Bluesky]: "@joeidaho.bsky.social"
        },
        bio: "Team Liason/TO for the 585FighterZ, independent game developer, kusoge collector extraordinaire. Ask me about scrimblo indie games.",
        imageUrl: JoeIdaho,
        gamesPlayed: [
            games.find(g => g.Title === "Guilty Gear: Strive")!,
            games.find(g => g.Title === "Undernight In-Birth II Sys:Celeste")!,
            games.find(g => g.Title === "Granblue Fantasy: Versus Rising")!,
        ],
        panX: 80,
    },
    {
        id:3,
        name: "Jon",
        tag: "MadWRLD",
        pronouns: "He/Him",
        role: "Social Media Manager/TO/Commentator",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "@MadWRLDfgc",
            [SocialPlatform.Discord]: "MadWRLDfgc",
        },
        bio: "585Z's big stepper/yapper. MadWRLD has been part of leadership since joining up in late 2024. He serves as the Social Media Manager for the squad but wears many hats within the org (mainly to cover up his hairline).",
        imageUrl: MadWRLD,
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
            games.find(g => g.Title === "2XKO")!,
        ],
    },
    {
        id:4,
        name: "Connor Petrei",
        tag: "Shotglass",
        pronouns: "He/They",
        role: "Competitor/Commentator",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "@Shotglass1804",
            [SocialPlatform.Discord]: "shotglass",
        },
        bio: "Rivals of Aether 1 Forsburn Main ranked top 3 in the region for 4 consecutive seasons and #1 as of Spring 2025.  Commentator and Tournament Organizer for Smash Ultimate & Rivals of Aether 1 & 2 featured at such events as Hitfall, Full Stack & TAPS.  Indie game dev and proud member of the Pelican Post team",
        imageUrl: Shotglass,
        gamesPlayed: [
            games.find(g => g.Title === "Rivals of Aether 2")!,
        ]
    },
    {
        id:5,
        name: "Julian Maxwell",
        pronouns: "He/Him",
        role: "Commentator",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "@Ghettosag3",
            [SocialPlatform.Discord]: "justsag3",
        },
        bio: "Hey hello howdy how are you, I'm Julian aka Ghettosag3. Local garbage dump of fighting games. Theres almost not a single fighting game ill say no to (screw chess showdown). I’m a big fan of fighting games and mostly tag fighters. The more messed up the game the more enjoyment ill get out of the game. Ive been playing fighting games since a kid and its stuck with me till now. See me in any game ill NEVER duck any type of smoke",
        imageUrl: GhettoSag3,
        gamesPlayed: [
            games.find(g => g.Title === "Super Smash Bros. Ultimate")!,
            games.find(g => g.Title === "Rivals of Aether 2")!,
            games.find(g => g.Title === "Tekken 8")!,
            games.find(g => g.Title === "2XKO")!,
            games.find(g => g.Title === "Undernight In-Birth II Sys:Celeste")!,
            games.find(g => g.Title === "Ultimate Marvel Vs Capcom 3")!,
            games.find(g => g.Title === "Nen Impact")!,
        ],
        tag: "GhettoSag3",
        panX: 30,
    },
        {
        id:6,
        name: "Oskar Weiss",
        tag: "Skar",
        pronouns: "He/Him",
        role: "Competitor",
        location: "Hudson Valley, NY",
        contact: {
            [SocialPlatform.X]: "@SkarFGC",
            [SocialPlatform.Discord]: "sk4r_",
            [SocialPlatform.Twitch]: "SkarFGC",
        },
        bio: "Shoto enthusiast, crosscut inputter, looper of throws. First loves were TF2 and CS, switched to FGs because my teammates were holding me back.",
        imageUrl: Skar,
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
            games.find(g => g.Title === "Guilty Gear: Strive")!,
        ],
        panX: 45,
    },
        {
        id:7,
        name: "Aidan Seaburg",
        tag: "The Clobber",
        pronouns: "He/Him",
        role: "Illustrator",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube",
        imageUrl: TheClobster,
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6" )!,
            games.find(g => g.Title === "Tekken 8")!,
            games.find(g => g.Title === "2XKO")!,
        ]
    },
        {
        id:8,
        name: "Jason Gibbs",
        tag: "Gibbs",
        pronouns: "He/Him",
        role: "Competitor/Coach",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "@Gibbs",
            [SocialPlatform.Email]: "jasongibbs2001@gmail.com" 
        },
        bio: "Tekken 8 player, \tSteve Fox Specialist ",
        imageUrl: Gibbs,
        gamesPlayed: [
            games.find(g => g.Title === "Tekken 8")!,
        ]
    },
        {
        id:9,
        name: "Ethan",
        tag: "Tyger",
        pronouns: "He/Him",
        role: "Competitor",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.YouTube]: "Tygerkid",
            [SocialPlatform.TikTok]: "Tygerkid"
        },
        bio: "\"A content creator, king and wrestling enthusiast. I love batman\"",
        imageUrl: Tyger,
        gamesPlayed: [
            games.find(g => g.Title === "Tekken 8")!,
        ]
    },
        {
        id:10,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:11,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:12,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:13,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:14,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:15,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },
        {
        id:16,
        name: "The Clobber",
        pronouns: "He/Him",
        role: "Media Director",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "test test test3",
        imageUrl: TheClobber
    },

]