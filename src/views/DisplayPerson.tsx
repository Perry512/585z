import React from "react"
import { IoMdClose } from "react-icons/io";
import type { Person } from "../types/Person";
import SocialLinksDisplay from "../components/SocialLinkDisplay"

interface PersonViewProps extends Person {
  onClose?: () => void;
  panX?: number;
  panY?: number;
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
    <div className="relative flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden w-full max-w-5xl">

      {/* Close function */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
          aria-label="Close"
          >
            <IoMdClose className="w-5 h-5" />
          </button>
      )}

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[35vh] md:h-auto aspect-[3/4] bg-black"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: `${panX}% ${panY}%`,
            backgroundSize: `cover`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "$000",
          }}
      />

      {/* Details Section */}
      <div className=" p-6 flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {name} | {tag}
            {pronouns && (
              <span className="ml-1 font-normal text-sm">({pronouns})</span>
            )}
          </h2>
          <p className="text-sm text-gray-700 mt-1">{role}</p>
          <p className="text-sm text-gray-600">{location}</p>

          {contact && <SocialLinksDisplay contacts={contact} />}

          <p className="text-lg text-gray-800 mt-4 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPerson;