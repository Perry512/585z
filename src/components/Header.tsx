import { Link } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';
import TheClobber from '../assets/TheClobber.png';
import logo2 from '../assets/Finished 585Z fr.svg'
import DisplayPerson from '../views/DisplayPerson';
import { GiAcousticMegaphone } from 'react-icons/gi';

function Header () {
    const { isOpen, openModal, closeModal } = useModal();

    return ( 
        <>
            <header className="bg-red-800 flex flex-wrap justify-between items-center w-full p-5">    
                <div className='flex flex-row justify-center mx-10'>
                    <a className="flex items-center" href="#home">
                        <img src={logo2} className="mr-3 h-6 sm:h-9" alt="585z Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" id='home'>585FighterZ</span>
                    </a>
                    <ul className='ml-10 translate-y-px'>
                        <li className="inline-block mr-10"> 
                            <Link to="/home" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg">
                                Home Page 
                            </Link>
                        </li>
                        <li className="inline-block mr-10"> 
                            <Link to="/gallery" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg">
                                Gallery
                            </Link>
                        </li>
                        <li className="inline-block mr-10"> 
                            <Link to="/calendar" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg">
                                Calendar 
                            </Link>
                        </li>
                        <li className="inline-block mr-10"> 
                            <Link to="/calendar" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg">
                                About Us
                            </Link>
                        </li>
                        <li className="inline-block mr-10"> 
                            <Link to="/calendar" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg">
                                PartnerZ & SponsorZ 
                            </Link>
                        </li>
                        <li className="inline-block mr-10">
                            <a href='#contact' rel="noopener noreferrer" className='text-black text-lg hover:text-blue-100 transition duration-300 ease-in-out'>
                                Contact Us! 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white">
                    <button className="bg-black px-5" onClick={openModal}><GiAcousticMegaphone size={25}/></button>
                </div>
            </header>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <DisplayPerson 
                    name="Aidan Seaburg"
                    pronouns="He/Him"
                    role="Media Producer"
                    location="Rochester, NY"
                    //contact="@The Clobber"
                    bio="Graduated from SUNY Brockport, Aidan enjoys spending his free time climbing, playing Tekken, Street Fighter and watching NorthernLion shorts on Youtube"  
                    imageUrl={TheClobber}  
                />
            </Modal>
        </>
    )
}

export default Header;