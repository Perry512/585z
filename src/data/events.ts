import JBR1 from "../assets/eventFliers/JBRoc_2_Flyer.png"
import JBR2 from "../assets/eventFliers/JBROC_splash.png";
import LR12 from "../assets/eventFliers/Lets_ROC_12_Flyer.png";
import LR13 from "../assets/eventFliers/Lets_ROC_13_Flyer.png";
import LR14 from "../assets/eventFliers/lr14_flyer.png";
import THURSDAYS from "../assets/eventFliers/AnimeThursdays.jpg";

import lr12sf6t8 from "../assets/results/lr12/sf6t8.jpg";
import lr12sf6t3 from "../assets/results/lr12/lr12sf6t3.jpg";
import lr12ggstt8 from "../assets/results/lr12/lr12ggstt8.jpg";
import lr12ggstt3 from "../assets/results/lr12/lr12ggstt3.jpg";
import lr12t8t8 from "../assets/results/lr12/lr12t8t8.jpg";
import lr12t8t3 from "../assets/results/lr12/lrt8t3.jpg";
import lr132xt8 from "../assets/results/lr13/lr132xt8.jpg";
import lr13sf6t8 from "../assets/results/lr13/lr13sf6t8.jpg";
import lr13t8t8 from "../assets/results/lr13/lr13t8t8.jpg";
import lr13ggstt8 from "../assets/results/lr13/lr13ggstt8.jpg";
import lr13ssbut8 from "../assets/results/lr13/lr13ssbut8.jpg";
import lr13roa2t8 from "../assets/results/lr13/lr13roa2t8.jpg";
import lr13roat8 from "../assets/results/lr13/lr13roat8.jpg";

import jbrt8t8 from "../assets/results/jbr2/JBR_T8_Top_8.png";
import jbrSF6t8 from "../assets/results/jbr2/JBR_SF6_Top_8.png";
import jbrR1t8 from "../assets/results/jbr2/JBR_Rivals_1_Top_8.png";
import jbrR2t8 from "../assets/results/jbr2/JBR_Rivals_2_Top_8.png";
import jbrUNI2t8 from "../assets/results/jbr2/JBR_UNI_2_Top_8.png";
import jbrGGSTt8 from "../assets/results/jbr2/JBR_Strive_Top_8.png";
import jbr2Xt8 from "../assets/results/jbr2/JBR_2XKO_Top_8.png";
import jbrSF6t4 from "../assets/results/jbr2/sf6t4.jpg";
import jbrt8t4 from "../assets/results/jbr2/t8t4.jpg";
import jbruni2t4 from "../assets/results/jbr2/UNIt4.jpg";
import jbr2xt4 from "../assets/results/jbr2/2xt4.jpg";
import jbrggstt4 from "../assets/results/jbr2/ggstt4.jpg";

import type { Event } from "../types/Event"

const eventsData: Event[] = [
    {
        id: 1,
        date: "2025-10-25",
        dateOnFlyer: false,
        eventName: "Let's Roc 12",
        eventType: "Monthly",
        gamesPlayed: ["Street Fighter 6", "2XKO"],
        location: "GLG Gaming Lounge",
        background: LR12,
        registrationSlug: "let-s-roc-12",
        eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan efficitur sem, et consectetur est venenatis a. In vel lorem felis. Suspendisse lobortis nec ex sit amet lobortis. Nunc id vehicula felis. Sed semper est ac odio varius, nec fermentum tellus semper. Proin imperdiet ullamcorper ullamcorper. Sed quam tortor, placerat ut convallis nec, aliquet vel nisi. Sed id tellus sit amet elit aliquam ullamcorper. Vestibulum nunc erat, maximus a risus sit amet, egestas dictum risus. Nunc consectetur fermentum augue, a pretium ante dictum non. Morbi feugiat erat tellus, sit amet vestibulum sapien fringilla eget. Etiam consectetur urna id turpis iaculis vulputate. Fusce accumsan nisi at leo aliquam tincidunt.",
        tournament:true,

        results: [
            {
                game:"Street Fighter 6",
                top8Graphic: lr12sf6t8,
                top3Photo: lr12sf6t3,
            },
            {
                game:"Tekken 8",
                top8Graphic: lr12t8t8,
                top3Photo: lr12t8t3,
            },
            {
                game:"Guilty Gear: Strive",
                top8Graphic: lr12ggstt8,
                top3Photo: lr12ggstt3,
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
        background: LR13,
        registrationSlug: "let-s-roc-13",
        tournament:true,
        results: [
            {
                game:"2XKO",
                top8Graphic: lr132xt8,
            },
            {
                game:"Street Fighter 6",
                top8Graphic: lr13sf6t8,
            },
            {
                game:"Tekken 8",
                top8Graphic: lr13t8t8,
            },
            {
                game:"Guilty Gear: Strive",
                top8Graphic: lr13ggstt8,
            },
            {
                game:"Super Smash Bros. Ultimate",
                top8Graphic: lr13ssbut8,
            },
            {
                game:"Rivals of Aether 2",
                top8Graphic: lr13roa2t8,
            },
            {
                game:"Rivals of Aether",
                top8Graphic: lr13roat8,
            },
        ],
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
        date: "2025-11-22",
        dateOnFlyer: false,
        eventName: "Lets Roc 14",
        eventType: "Monthly",
        gamesPlayed: ["Rivals of Aether 1", "Rivals of Aether 2", "Street Fighter 6", "Tekken 8", "Super Smash Bros. Melee", "Super Smash Bros. Ultimate"],
        location: "GLG Lounge",
        background: LR14,
        registrationSlug: "let-s-roc-14",
        tournament: true,
    },
    {
        id: 5,
        date: "2025-12-13",
        dateOnFlyer: false,
        eventName: "Jingle Bell Roc",
        eventType: "Regional",
        gamesPlayed: ["Rivals of Aether 1", "Rivals of Aether 2", "Street Fighter 6", "Tekken 8", "Super Smash Bros. Melee", "Super Smash Bros. Ultimate"],
        location: "Kate Gleason Auditorium",
        background: JBR1,
        flier: JBR2,
        registrationSlug: "jingle-bell-roc-2-2",
        isFeatured:true,
        tournament: true,
        results: [
            {
                game:"Street Fighter 6",
                top8Graphic:jbrSF6t8,
                top3Photo:jbrSF6t4,
            },
            {
                game:"Tekken 8",
                top8Graphic:jbrt8t8,
                top3Photo:jbrt8t4,
            },
            {
                game:"Rivals of Aether 2",
                top8Graphic:jbrR2t8,
            },
            {
                game:"Rivals of Aether 1",
                top8Graphic:jbrR1t8,
            },
            {
                game:"UNI-2",
                top8Graphic:jbrUNI2t8,
                top3Photo:jbruni2t4,
            },
            {
                game:"Guilty Gear Strive",
                top8Graphic:jbrGGSTt8,
                top3Photo:jbrggstt4,
            },
            {
                game:"2XKO",
                top8Graphic:jbr2Xt8,
                top3Photo:jbr2xt4,
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
        background: THURSDAYS,
        flier: THURSDAYS,
        registrationSlug: "let-s-roc-14",
        eventDescription: "Come join us for weekly casuals featuring multiple tournaments"
    },
]

export default eventsData;