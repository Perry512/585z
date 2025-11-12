import { useState } from "react"
import Modal from "../components/Modal"
import { useModal } from "../hooks/useModal"
import DisplayPerson from "../views/DisplayPerson"
import { team } from "../data/team"

import type { Person } from "../types/Person"

export default function MeetV2() {
    const { isOpen, openModal, closeModal } = useModal();
    const [activePerson, setActivePerson] = useState<Person | null>(null);

    const handleOpen = (person: Person) => {
        setActivePerson(person);
        openModal();
    };

    const leaders = team.filter((member) => member.leadership)
    const others = team.filter((member) => !member.leadership)

    return (
      <div className="bg-black w-full min-h-screen"> 
        <div className="py-4 text-center text-xl text-white font-semibold">
          <h2 className="text-4xl text-white font-bold tracking-wide">Meet our team</h2>
        </div>

        {/* Leadership */}
        {leaders.length > 0 && (
          <div className="px-6 mb-10">
            <h3 className="text-2xl text-white font-semibold mb-4 border-b border-gray-700 pb-2">
              Leadership
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {leaders.map((member => (
                <div
                  key={member.id}
                  className="cursor-pointer text-center text-white bg-zinc-700 p-6 rounded-xl hover:bg-zinc-600 hover:text-black transition transform hover:scale-[1.05] shadow-lg shadow-zinc-900/50 min-w-[80vw] md:min-w-[60vw] lg:min-w-[30vw]"
                  onClick={() => handleOpen(member)}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full mb-3 object-cover border-2 border-gray-400"
                  />
                  <h3 className="font-bold text-lg">
                    {member.name} | {member.tag}
                  </h3>
                  <p className="text-sm text-gray-300">{member.role}</p>
                </div>
              )))}
            </div>
          </div>
        )}
        {/* Grid of team members */}
        <h3 className="text-2xl text-white font-semibold mb-4 border-b border-gray-700 pb-2">
          Members
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
          {others.map((member) => (
            <div
              key={member.id}
              className="cursor-pointer text-center text-white bg-zinc-700 p-4 rounded-lg hover:bg-zinc-500 hover:text-black transition"
              onClick={() => handleOpen(member)}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover border-2 border-gray-500"
              />
              <h3 className="font-bold">{member.name} | {member.tag}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={closeModal}>
            {activePerson && <DisplayPerson {...activePerson} onClose={closeModal}/>}
        </Modal>
    </div>
  )
}
