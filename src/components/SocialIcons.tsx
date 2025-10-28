import {
    SiDiscord,
    SiBluesky,
    SiYoutube,
    SiX,
    SiTwitch,
} from "react-icons/si";
import { Social } from "../types/Social";

export const socialIconMap = {
    [Social.Discord]: SiDiscord,
    [Social.Bluesky]: SiBluesky,
    [Social.X]: SiX,
    [Social.Twitch]: SiTwitch,
    [Social.YouTube]: SiYoutube,
}