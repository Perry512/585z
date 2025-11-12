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
                    [SocialPlatform.YouTube]: `https://youtube.com/@${username}`,
                    [SocialPlatform.X]: `https://x.com/${username}`,
                    [SocialPlatform.TikTok]: `https://tiktok.com/@${username}`,
                    [SocialPlatform.Email]: `mailto:${username}`,
                    [SocialPlatform.Instagram]: `https://instagram.com/${username}`
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
                        {/* Icon */}
                        <span><Icon className="w-5 h-5 translate-y-0.5 flex-shrink-0 text-lg" /></span>
                        {/* Divider */}
                        <span className="text-gray-400">|</span>
                        {/* Username */}
                        <span className="truncate max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem]">
                            {username}
                        </span>
                    </a>
                );
            })}
        </div>
    )
}

export default SocialLinksDisplay;