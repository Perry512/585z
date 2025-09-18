import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import TheClobber from '../assets/TheClobber.png';
import logo from '../assets/585zLogo.png';
import DisplayPerson from '../views/DisplayPerson';

function Header () {
    const { isOpen, openModal, closeModal } = useModal();

    return ( 
        <>
            <header className="bg-red-800 flex flex-wrap justify-between items-center w-full p-5">    
                <div className='flex flex-row justify-center mx-10'>
                    <a className="flex items-center" href="#home">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="585z Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white" id='home'>585 FighterZ</span>
                    </a>
                </div>
                <div className="flex flex-row justify-around">
                    <ul>
                        <li className="inline-block mr-10"> <a href='#contact' rel="noopener noreferrer" className='text-black text-xl hover:text-blue-100 transition duration-300 ease-in-out'> Contact Us! </a> </li>
                        <li className="inline-block mr-10"> 2 </li>
                        <li className="inline-block mr-10"> 3 </li>
                    </ul>
                </div>
                <div className="text-white">
                    <button onClick={openModal}> Test </button>
                </div>
            </header>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <DisplayPerson 
                    name="Aidan Seaburg"
                    pronouns="He/Him"
                    role="Media Producer"
                    location="Rochester, NY"
                    contact="@The Clobber"
                    bio="Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube"  
                    imageUrl={TheClobber}  
                />
            </Modal>
        </>
    )
}

export default Header;