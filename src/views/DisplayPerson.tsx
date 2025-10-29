import React from "react"
import { IoMdClose } from "react-icons/io";
import type { Person } from "../types/Person";
import type { SocialLinks } from "../types/Social";
import { SocialPlatform } from "../types/Social"
import SocialLinksDisplay from "../components/SocialLinkDisplay"


interface PersonViewProps extends Person {
    name: string;
    pronouns?: string;
    role: string;
    location?: string;
    contact?: SocialLinks | Record<SocialPlatform, string>;
    bio: string;
    tag?: string;
    imageUrl: string;
    panX?: number;
    panY?: number;
    scale?: number;
    onClose?: () => void;
}

const DisplayPerson: React.FC<PersonViewProps>  = ({
    name,
    pronouns,
    role,
    location,
    contact,
    bio,
    tag,
    imageUrl,
    panX = 50,
    panY = 50,
    onClose,
}) => {
  return(
    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
      {/* Close function */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          aria-label="Close"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
      )}

      {/* Image Section */}
      <div className="md:w-1/2 w-1/2 aspect-[3/4] bg-black"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${panX}% ${panY}%`,
            backgroundSize: `cover`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "$000",
          }}
      />

      {/* Details Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {name} | {tag} {pronouns && <span className="font-normal">({pronouns})</span>}
          </h2>
          <p className="text-sm text-gray-700 mt-1">{role}</p>
          <p className="text-sm text-gray-600 mt-1">{location}</p>
          {contact && <SocialLinksDisplay contacts={contact} />}
          <p className="text-sm text-gray-800 mt-4 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPerson;