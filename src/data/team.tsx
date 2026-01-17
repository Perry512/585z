import type { Person } from "../types/Person";
import { SocialPlatform } from "../types/Social";
import games from "./games";


export const team: Person[] = [
    {
        id:1,
        name: "Daniel Humphrey",
        tag: "D.Antonio",
        pronouns: "He/Him",
        role: "585Z Commander",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "I’m a husband, father, and community-driven esports leader with nearly a decade of experience building inclusive gaming spaces. I’m the owner of 585FighterZ Esports and the General Manager of Great Lakes Gaming, where I oversee operations, events, and community engagement. I’m also a certified Pokémon Professor, tournament organizer, and event host, having led my fair share of grassroots tournaments across fighting games, Pokémon, and competitive gaming communities.\nBeyond events, I work as an Esports Education Instructor, designing and teaching curriculum that connects competitive gaming with social-emotional learning, leadership development, and career pathways. My passion is using games as a tool to create opportunity, foster connection, and empower the next generation through play and competition.",
        imageUrl: "./profilePictures/dan.png",
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
        ],
        leadership: true,
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
        imageUrl: "./profilePictures/joeidaho.jpg",
        gamesPlayed: [
            games.find(g => g.Title === "Guilty Gear: Strive")!,
            games.find(g => g.Title === "Undernight In-Birth II Sys:Celeste")!,
            games.find(g => g.Title === "Granblue Fantasy: Versus Rising")!,
        ],
        panX: 80,
        leadership:true,
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
        imageUrl: "./profilePictures/madwrld.jpg",
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
            games.find(g => g.Title === "2XKO")!,
        ],
        leadership: true,
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
        imageUrl: "./profilePictures/shotglass.png",
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
        imageUrl: "./profilePictures/ghettosag3.jpeg",
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
        imageUrl: "./profilePictures/skar.jpg",
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
        imageUrl: "./profilePictures/clobster.jpg",
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
        imageUrl: "./profilePictures/gamerGibbs.jpg",
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
        imageUrl: "./profilePictures/tyger.jpg",
        gamesPlayed: [
            games.find(g => g.Title === "Tekken 8")!,
        ]
    },
        {
        id:10,
        name: "Gabriella \"Gabby\" Sarango",
        pronouns: "She/They",
        tag: "ValkyrieVivy",
        role: "Universal Project Coordinator",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "ValkyrieVivy",
            [SocialPlatform.TikTok]: "585zvalkyrievivy",
            [SocialPlatform.Instagram]: "ValkyrieVivy"
        },
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
            games.find(g => g.Title === "Tekken 8")!,
        ],
        bio: "\"Im terrible with bio's, but I'm way better with people! I'm a certified yapper, but no one has complained (much) so far! If you see me, ask me about FighterZ Fatale! Don't ask about Epic the Musical, you will get stuck in a non-skippable 2 1/2 hour cutscene.\"",
        imageUrl: "./profilePictures/gabby.png",
        leadership: true,
    },
        {
        id:11,
        name: "Bryanna O.",
        pronouns: "She/Her",
        role: "Fatale Exec assistant",
        location: "Rochester, NY",
        contact: {
        },
        bio: "One of the founding members of the 585Z| Fighterz Fatale. Just a casual gamer who enjoys some cozy/fighting games. Hoping to make the gaming world better and more enjoyable for female gamers ❤️",
        imageUrl: "./profilePictures/lazytitan.jpeg",
        gamesPlayed: [
            games.find(g => g.Title === "Street Fighter 6")!,
            games.find(g => g.Title === "2XKO")!,
            games.find(g => g.Title === "Mortal Kombat")!,
        ]
    },
        {
        id:12,
        name: "Amarri Brown",
        tag: "AresInferno",
        pronouns: "He/Him",
        role: "Competitor/Coach",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "AresInferno",
            [SocialPlatform.Twitch]: "AresInferno",
            [SocialPlatform.YouTube]: "AresInferno2038",
            [SocialPlatform.Discord]: "aresinferno"
        },
        bio: "My name is Amarri, but get called Ares. I have a Bachelors degree in Electrical Engineering and currently work as an engineer. My hobbies consists of playing video games, golfing, playing guitar, and restoring a 1969 Mustang! I currently play Tekken 8 with Armor King being my main.",
        imageUrl: "./profilePictures/IMG_8297 - Amarri Brown.png",
        gamesPlayed: [ games.find(g => g.Title === "Tekken 8")! ]
    },
        {
        id:13,
        name: "Cristian Vargas",
        tag: "Clibs",
        pronouns: "He/Him",
        role: "Supervisor/Competitor",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: "clibs",
            [SocialPlatform.X]: "OP_Clibs",
        },
        bio: "Super Smash Bros player focused in Smash Ultimate",
        gamesPlayed: [
            games.find(g => g.Title === "Super Smash Bros. Ultimate")!,
            games.find(g => g.Title === "Super Smash Bros. Melee")!,
        ],
        imageUrl: "./profilePictures/clibs.jpg"
    },
        {
        id:14,
        name: "Tyler Nicholas",
        tag: "Perry",
        pronouns: "He/Him",
        role: "Web Developer/Competitor",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: "perry2",
            [SocialPlatform.X]: "Perry_Fucks",
            [SocialPlatform.YouTube]: "Perry3098"
        },
        bio: "Player, Coach, Developer... Jobless and Invincible.",
        imageUrl: "./profilePictures/Perry.jpg"
    },
        {
        id:15,
        name: "Wilfredo Rodriguez Jr",
        tag: "SuperionMagic",
        pronouns: "He/Him",
        role: "Team Quartermaster",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.Discord]: ".megameme"
        },
        bio: "I’m a curious helpful busybody from New York City by way of Orlando whose first conscious experience with a fighting game was through Street Fighter 2, followed by Super Smash Bros. until returning to traditional fighting games to extend the amount of time I can play comfortably. Originally joining the 585FighterZ after building my first controller, I felt encouraged to delve deeper into repair and controller service with others’ interface devices. Currently I help the team with event safety, bracket running, and inventory management, and I also consult over TCG ventures and related partnerships. \tI welcome new servicing and repair opportunities, feel free to approach prior or during events with questions or requests.",
        imageUrl: "./profilePictures/freddy.jpeg",
        leadership: true,
    },
        {
        id:16,
        name: "Zachary Jaeckel-Rizzo",
        tag:"HecticION",
        pronouns: "He/Him",
        role: "Liason/Production",
        location: "Rochester, NY",
        contact: {
            [SocialPlatform.X]: "TheHecticIon",
            [SocialPlatform.Bluesky]:"hecticion.bsky.social",
            [SocialPlatform.YouTube]: "hectic_ion"
        },
        bio: "My name is Hectic, proud TO for the FighterZ. You can catch me running brackets, keeping the stream together, or playing some sets. I wear many hats, so you can always find me. Just know, I do-a the mix 🤌",
        imageUrl: "./profilePictures/zach.jpg",
        leadership:true,
    },

]