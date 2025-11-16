import { Sponsor } from "../types/Sponsor";

import glgLogo from "../assets/sponsorLogos/glglogo.png"
import lGSLogo from "../assets/sponsorLogos/lGS.png"
import theZone from "../assets/sponsorLogos/941ZoneLogo.png";
import valhalCC from "../assets/sponsorLogos/valhalLogo.png";

export const sponsors: Sponsor[] = [
    {
        name: "GLG Gaming Lounge",
        logo: glgLogo,
        link: "https://www.glgaminglounges.com/",
    },
    {
        name: "Legacy Game Store",
        logo: lGSLogo,
        link: "https://legacygamestore.com/",
    },
    {
        name: "94.1 The Zone",
        logo: theZone,
        link: "https://941thezone.com/",
    },
    {
        name: "Valhalla Combat Championship",
        logo: valhalCC,
        link: "https://www.vccmma.com/",
    },
]