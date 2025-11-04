import {
    SiDiscord,
    SiBluesky,
    SiYoutube,
    SiX,
    SiTwitch,
    SiGmail,
    SiTiktok,
    SiInstagram,
} from "react-icons/si";
import { SocialPlatform } from "../types/Social";

export const socialIconMap: Record<SocialPlatform, React.ElementType> = {
    [SocialPlatform.Discord]: SiDiscord,
    [SocialPlatform.Bluesky]: SiBluesky,
    [SocialPlatform.X]: SiX,
    [SocialPlatform.Twitch]: SiTwitch,
    [SocialPlatform.YouTube]: SiYoutube,
    [SocialPlatform.Email]: SiGmail,
    [SocialPlatform.TikTok]: SiTiktok,
    [SocialPlatform.Instagram]: SiInstagram,                                                                                                                                                                                                                                                   
}                      