import React from "react"

interface PersonViewProps {
    name: string;
    pronouns?: string;
    role: string;
    location?: string;
    contact?: string;
    bio: string;
    imageUrl: string;
}

const DisplayPerson: React.FC<PersonViewProps>  = ({
    name,
    pronouns,
    role,
    location,
    contact,
    bio,
    imageUrl,
}) => {
    return(
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
      {/* Image Section */}
      <div className="md:w-1/2 w-full">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {name} {pronouns && <span className="font-normal">({pronouns})</span>}
          </h2>
          <p className="text-sm text-gray-700 mt-1">{role}</p>
          <p className="text-sm text-gray-600 mt-1">{location}</p>
          <a
            href={`mailto:${contact}`}
            className="text-sm text-blue-600 hover:underline mt-2 inline-block"
          >
            {contact}
          </a>

          <p className="text-sm text-gray-800 mt-4 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
    );
};

export default DisplayPerson;