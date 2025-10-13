import LetsRoc from "../assets/LETSROC.png"
import type { Event } from "../types/Event"

const eventsData: Event[] = [
    {
        id: 1,
        date: "2025-10-09",
        eventName: "Let's Roc monthly",
        eventType: "Fighting Games",
        gamesPlayed: ["Strive", "2XKO"],
        location: "GLG Gaming Lounge",
        background: LetsRoc,
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan efficitur sem, et consectetur est venenatis a. In vel lorem felis. Suspendisse lobortis nec ex sit amet lobortis. Nunc id vehicula felis. Sed semper est ac odio varius, nec fermentum tellus semper. Proin imperdiet ullamcorper ullamcorper. Sed quam tortor, placerat ut convallis nec, aliquet vel nisi. Sed id tellus sit amet elit aliquam ullamcorper. Vestibulum nunc erat, maximus a risus sit amet, egestas dictum risus. Nunc consectetur fermentum augue, a pretium ante dictum non. Morbi feugiat erat tellus, sit amet vestibulum sapien fringilla eget. Etiam consectetur urna id turpis iaculis vulputate. Fusce accumsan nisi at leo aliquam tincidunt.",
    },
    {
        id: 2,
        date: "2025-10-10",
        eventName: "Jingle Bell Roc",
        eventType: "Fighting Games",
        gamesPlayed: ["Tekken 8"],
        location: "GLG Gaming Lounge",
        background: LetsRoc
    },
    {
        id: 3,
        date: "2025-11-11",
        eventName:"Turkey's on the table",
        eventType:"Hangout",
        gamesPlayed:["None, bitch"],
        location: "GLG Gaming Lounge",
        background: LetsRoc,
    }
]

export default eventsData;