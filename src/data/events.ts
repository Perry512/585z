import type { Event } from "../types/Event"

const eventsData: Event[] = [
    {
        id: 1,
        date: "2025-08-25",
        dateOnFlyer: false,
        eventName: "Let's Roc 12",
        eventType: "Monthly",
        gamesPlayed: ["Street Fighter 6", "2XKO"],
        location: "GLG Gaming Lounge",
        background: "./eventFliers/Lets_ROC_12_Flyer.png",
        registrationSlug: "let-s-roc-12",
        eventDescription: "",
        tournament:true,

        results: [
            {
                game:"Street Fighter 6",
                top8Graphic: "./results/lr12/sf6t8.jpg",
                top3Photo: "./results/lr12/lr12sf6t3.jpg",
            },
            {
                game:"Tekken 8",
                top8Graphic: "./results/lr12/lr12t8t8.jpg",
                top3Photo: "./results/lr12/lrt8t3.jpg",
            },
            {
                game:"Guilty Gear: Strive",
                top8Graphic: "./results/lr12/lr12ggstt8.jpg",
                top3Photo: "./results/lr12/lr12ggstt3.jpg",
            },
        ],
    },
    {
        id: 2,
        date: "2025-10-10",
        dateOnFlyer: false,
        eventName: "Let's Roc 13",
        eventType: "Fighting Games",
        gamesPlayed: ["Tekken 8"],
        location: "GLG Gaming Lounge",
        background: "./eventFliers/Lets_ROC_13_Flyer.png",
        registrationSlug: "let-s-roc-13",
        tournament:true,
        results: [
            {
                game:"2XKO",
                top8Graphic: "./results/lr13/lr132xt8.jpg",
            },
            {
                game:"Street Fighter 6",
                top8Graphic: "./results/lr13/lr13sf6t8.jpg",
            },
            {
                game:"Tekken 8",
                top8Graphic: "./results/lr13/lr13t8t8.jpg",
            },
            {
                game:"Guilty Gear: Strive",
                top8Graphic: "./results/lr13/lr13ggstt8.jpg",
            },
            {
                game:"Super Smash Bros. Ultimate",
                top8Graphic: "./results/lr13/lr13ssbut8.jpg",
            },
            {
                game:"Rivals of Aether 2",
                top8Graphic: "./results/lr13/lr13roa2t8.jpg",
            },
            {
                game:"Rivals of Aether",
                top8Graphic: "./results/lr13/lr13roat8.jpg",
            },
        ],
    },
    {
        id: 4,
        date: "2025-11-22",
        dateOnFlyer: false,
        eventName: "Lets Roc 14",
        eventType: "Monthly",
        gamesPlayed: ["Rivals of Aether 1", "Rivals of Aether 2", "Street Fighter 6", "Tekken 8", "Super Smash Bros. Melee", "Super Smash Bros. Ultimate"],
        location: "GLG Lounge",
        background: "./eventFliers/lr14_flyer.png",
        registrationSlug: "let-s-roc-14",
        tournament: true,
    },
    {
        id: 5,
        date: "2025-12-13",
        dateOnFlyer: false,
        eventName: "Jingle Bell Roc 2",
        eventType: "Regional",
        gamesPlayed: ["Rivals of Aether 1", "Rivals of Aether 2", "Street Fighter 6", "Tekken 8", "Super Smash Bros. Melee", "Super Smash Bros. Ultimate"],
        location: "Kate Gleason Auditorium",
        background: "./eventFliers/JBRoc_2_Flyer.png",
        flier: "./eventFliers/JBROC_splash.png",
        registrationSlug: "jingle-bell-roc-2-2",
        isFeatured:false,
        tournament: true,
        results: [
            {
                game:"Street Fighter 6",
                top8Graphic: "./results/jbr2/JBR_SF6_Top_8.png",
                top3Photo:"./results/jbr2/sf6t4.jpg",
            },
            {
                game:"Tekken 8",
                top8Graphic: "./results/jbr2/JBR_T8_Top_8.png",
                top3Photo:"./results/jbr2/t8t4.jpg",
            },
            {
                game:"Rivals of Aether 2",
                top8Graphic:"./results/jbr2/JBR_Rivals_2_Top_8.png",
            },
            {
                game:"Rivals of Aether 1",
                top8Graphic:"./results/jbr2/JBR_Rivals_1_Top_8.png",
            },
            {
                game:"UNI-2",
                top8Graphic:"./results/jbr2/JBR_UNI_2_Top_8.png",
                top3Photo:"./results/jbr2/UNIt4.jpg",
            },
            {
                game:"Guilty Gear Strive",
                top8Graphic:"./results/jbr2/JBR_Strive_Top_8.png",
                top3Photo:"./results/jbr2/ggstt4.jpg",
            },
            {
                game:"2XKO",
                top8Graphic:"./results/jbr2/JBR_2XKO_Top_8.png",
                top3Photo:"./results/jbr2/2xt4.jpg",
            },     
        ]
    },
        {
        id: 6,
        date: "2025-11-15",
        eventName: "Lets Lab",
        eventType: "Meetup",
        gamesPlayed: ["Casuals"],
        location: "GLG Lounge",
        background: "./eventFliers/AnimeThursdays.jpg",
        flier: "./eventFliers/AnimeThursdays.jpg",
        registrationSlug: "let-s-roc-14",
        eventDescription: "Come join us for weekly casuals featuring multiple tournaments"
    },
    {
        id:7,
        date: "2026-1-24",
        eventName: "Let's Roc 15",
        eventType: "Monthly",
        gamesPlayed: ["Guilty Gear -Strive-", "Rivals of Aether", "Street Fighter 6", "DNF Duel", "Smash Ultimate", "2XKO", "Rivals of Aether II", "Fatal Fury: City of the Wolves", "Tekken 8"],
        location: "GLG Lounge",
        background: "./eventFliers/Lets_ROC_JAN_2026_EDIT.png",
        flier:"./eventFliers/Lets_ROC_JAN_2026_EDIT.png",
        registrationSlug: "let-s-roc-15",
        tournament: true,
        isFeatured:true,
    },
]

export default eventsData;