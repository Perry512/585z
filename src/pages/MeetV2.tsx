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

    return (
      <div className="bg-black w-full min-h-100"> 
        <div className="py-4">
          <h2 className="text-2xl font-bold text-white">Meet our team</h2>
        </div>

        {/* Grid of team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {team.map((member) => (
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
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={closeModal}>
            {activePerson && <DisplayPerson {...activePerson} />}
        </Modal>
    </div>
  )
}
