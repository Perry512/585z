import { SiTwitch, SiX, SiStartdotgg } from "@icons-pack/react-simple-icons";

const icons = {
    SiTwitch,
    SiX,
    SiStartdotgg,
};

type IconType = keyof typeof icons;

interface SocialLinkProps {
    mediaType: IconType;
    usersName: string;
    usersLink?: string;
}
export default function SocialLink ({ mediaType, usersName, usersLink = "https://visdeurbel.nl/en/" }: SocialLinkProps) {
    
    const MediaType = icons[mediaType];

    return (
        <div className="flex flex-row"> <MediaType /> <p> &nbsp;<a target="_blank" href={usersLink} rel="noopener noreferrer" className="text-white hover:text-white">{usersName}</a></p></div>
    )
}