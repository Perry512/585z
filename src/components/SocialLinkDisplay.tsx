import React from "react";
import { SocialPlatform, SocialLinks } from "../types/Social";
import { socialIconMap } from "./SocialIcons";

interface SocialLinkDisplayProps {
    contacts: SocialLinks;
}

const SocialLinksDisplay: React.FC<SocialLinkDisplayProps> = ({ contacts }) => {
    return (
        <div className="flex gap-4 mt-3">
            {Object.entries(contacts).map(([platform, username]) => {
                const Icon = socialIconMap[platform as SocialPlatform];
                if (!Icon || !username) return null;

                const linkMap: Record<SocialPlatform, string> = {
                    [SocialPlatform.Discord]: `https://discord.com/users/${username}`,
                    [SocialPlatform.Bluesky]: `https://bsky.app/${username}`,
                    [SocialPlatform.Twitch]: `https://twitch.tv/${username}`,
                    [SocialPlatform.YouTube]: `https://youtube.com/${username}`,
                    [SocialPlatform.X]: `https://x.com/${username}`,
                };

                const href = linkMap[platform as SocialPlatform] || "#";

                return(
                    <a
                        key={platform}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-red-600 transition flex flex-row"
                        title={platform}
                    >
                        <Icon className="w-5 h-5" />&nbsp; |&nbsp; <div>{username}</div>
                    </a>
                );
            })}
        </div>
    )
}

export default SocialLinksDisplay;