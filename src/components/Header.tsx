import { Link } from 'react-router-dom';
import { useModal } from '../hooks/useModal';
import { useState } from 'react';
import logo2 from '../assets/Finished 585Z fr.svg'
import { GiAcousticMegaphone } from 'react-icons/gi';
import { FiMenu, FiX } from 'react-icons/fi';
import EventModal from './EventModal';
import { GetClosestEvent } from '../hooks/GetClosestEvent';
import eventsData from '../data/events';

function Header () {
    const { isOpen, toggleModal, closeModal } = useModal();
    const closestEvent = GetClosestEvent(eventsData)
    const featuredEvent = eventsData.find((e) => e.isFeatured) || closestEvent;

    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
            <header className="flex justify-between items-center w-full px-6 py-4 fixed left-0 top-0 z-[500] bg-gradient-to-b from-red-800 to-zinc-700/70 shadow-md"> 

                {/* Logo */}
                <Link 
                    to="/home" 
                    className="text-black hover:text-red-700 transition duration-300 ease-in-out text-lg flex flex-row"
                    onClick={() => {if(menuOpen) { setMenuOpen(false); }}}
                >
                    <img src={logo2} className="mr-3 h-6 -translate-y-1" alt="585Z Logo" />
                    <span className="text-2xl"> 585FighterZ</span>
                </Link>

                {/* Desktop View */}
                    <ul className='hidden md:flex space-x-10 text white text-lg'>
                        <li className="inline-block mr-10"> <Link to="/aboutUs" className="menu-link"> About Us </Link> </li>
                        <li className="inline-block mr-10"> <Link to="/calendar" className="menu-link"> Calendar</Link></li>
                        <li className="inline-block mr-10"> <Link to="/gallery" className="menu-link">Gallery</Link></li>  
                        <li className="inline-block mr-10"> <Link to="/calendar" className="menu-link">PartnerZ & SponsorZ </Link></li>
                        <li className="inline-block mr-10"><a href='#contact' rel="noopener noreferrer" className='text-black text-lg hover:text-red-700 transition duration-300 ease-in-out' /></li>
                    </ul>

                <div className="flex items-center gap-4">
                    <button className=" hidden md:flex bg-black px-5" onClick={toggleModal}><GiAcousticMegaphone size={25} color='red'/></button>

                    <button
                        className="md:hidden bg-black text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden absolute top-20 w-full bg-zinc-800/95 text-white text-center py-6 space-y-5 shadow-lg z-[400]">
                    <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About Us</Link><br />
                    <Link to="/calendar" onClick={() => setMenuOpen(false)}>Calendar</Link><br />
                    <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link><br />
                    <Link to="/calendar" onClick={() => setMenuOpen(false)}>PartnerZ & SponsorZ</Link><br />
                </div>
            )}
            {isOpen && <EventModal activeEvent={featuredEvent} onClose={closeModal} /> }
        </>
    )
}

export default Header;