import { Link } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import logo2 from '../assets/Finished 585Z fr.svg'
import { GiAcousticMegaphone } from 'react-icons/gi';
import EventModal from './EventModal';
import { GetClosestEvent } from '../hooks/GetClosestEvent';
import eventsData from '../data/events';

function Header () {
    const { isOpen, openModal, closeModal } = useModal();
    const closestEvent = GetClosestEvent(eventsData)
    const featuredEvent = eventsData.find((e) => e.isFeatured) || closestEvent ? closestEvent : null;

    return ( 
        <>
            <header className="bg-red-800 flex flex-wrap justify-between items-center w-full p-5">    
                <div className='flex flex-row justify-center mx-10'>
                    <div>
                        <Link to="/home" className="text-black hover:text-blue-100 transition duration-300 ease-in-out text-lg flex flex-row">
                            <img src={logo2} className="mr-3 h-6 sm:h-9" alt="585Z Logo" />
                                <div className="text-2xl"> 585FighterZ</div>
                        </Link>
                    </div>
                    <ul className='ml-10 translate-y-px'>
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
            {isOpen && <EventModal activeEvent={featuredEvent} onClose={closeModal} /> }
        </>
    )
}

export default Header;