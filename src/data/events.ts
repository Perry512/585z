import JBR1 from "../assets/eventFliers/JBR2025.png"
import JBR2 from "../assets/eventFliers/DTWN585_JBR_Flyer_V2.png"
import type { Event } from "../types/Event"

const eventsData: Event[] = [
    {
        id: 1,
        date: "2025-10-09",
        dateOnFlyer: false,
        eventName: "Let's Roc monthly",
        eventType: "Fighting Games",
        gamesPlayed: ["Street Fighter 6", "2XKO"],
        location: "GLG Gaming Lounge",
        background: JBR1,
        flier: JBR2,
        registrationSlug: "let-s-roc-13",
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan efficitur sem, et consectetur est venenatis a. In vel lorem felis. Suspendisse lobortis nec ex sit amet lobortis. Nunc id vehicula felis. Sed semper est ac odio varius, nec fermentum tellus semper. Proin imperdiet ullamcorper ullamcorper. Sed quam tortor, placerat ut convallis nec, aliquet vel nisi. Sed id tellus sit amet elit aliquam ullamcorper. Vestibulum nunc erat, maximus a risus sit amet, egestas dictum risus. Nunc consectetur fermentum augue, a pretium ante dictum non. Morbi feugiat erat tellus, sit amet vestibulum sapien fringilla eget. Etiam consectetur urna id turpis iaculis vulputate. Fusce accumsan nisi at leo aliquam tincidunt.",
    },
    {
        id: 2,
        date: "2025-10-10",
        dateOnFlyer: false,
        eventName: "Jingle Bell Roc",
        eventType: "Fighting Games",
        gamesPlayed: ["Tekken 8"],
        location: "GLG Gaming Lounge",
        background: JBR1,
        flier: JBR2,
        registrationSlug: "let-s-roc-13",
    },
    {
        id: 3,
        date: "2025-11-11",
        dateOnFlyer: false,
        eventName:"Turkey's on the table",
        eventType:"Hangout",
        gamesPlayed:["None, bitch"],
        location: "GLG Gaming Lounge",
        background: JBR1,
        flier: JBR2,
        registrationSlug: "let-s-roc-13",
    },
    {
        id: 4,
        date: "2025-12-14",
        dateOnFlyer: false,
        eventName: "Jingle Bell Roc",
        eventType: "Regional",
        gamesPlayed: ["Rivals of Aether 1", "Rivals of Aether 2", "Street Fighter 6", "Tekken 8", "Super Smash Bros. Melee", "Super Smash Bros. Ultimate"],
        location: "Kate Gleason Auditorium",
        background: JBR1,
        flier: JBR2,
        registrationSlug: "let-s-roc-13",
    },
]

export default eventsData;