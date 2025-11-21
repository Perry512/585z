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
            <header className="flex justify-between items-center w-full px-6 py-4 fixed left-0 top-0 z-[500] bg-gradient-to-b from-red-800 via-red-900/90 to-zinc-800/70 backdrop-blur-md shadow-md"> 

                {/* Logo */}
                <Link 
                    to="/home" 
                    className="text-white hover:text-red-700 transition duration-300 ease-in-out text-lg flex flex-row"
                    onClick={() => {if(menuOpen) { setMenuOpen(false); }}}
                >
                    <img src={logo2} className="h-[60px] md:h-10 mr-3 -translate-y-1" alt="585Z Logo" />
                    <span className="hidden md:flex text-xl translate-y-1 hover:text-gray-400 drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] hover:scale-[1.1] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.55)] transition delay-100 duration-200"> 585FighterZ</span>
                </Link>

                {/* Desktop View */}
                    <ul className='hidden md:flex text-lg'>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/aboutUs" className="menu-link"> About Us </Link> </li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/calendar" className="menu-link"> Calendar</Link></li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/gallery" className="menu-link">Gallery</Link></li>  
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/sponsors" className="menu-link">PartnerZ & SponsorZ </Link></li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"><a href='#contact' rel="noopener noreferrer" className='text-black text-lg hover:text-red-700 transition duration-300 ease-in-out' /></li>
                    </ul>

                <div className="flex items-center gap-4">
                    <button className=" hidden md:flex bg-black px-5" onClick={toggleModal}><GiAcousticMegaphone size={25} color='red'/></button>

                    <button
                        className="md:hidden bg-transparent text-black"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden fixed w-full bg-zinc-800/95 text-white text-center pt-[20vh] pb-10 space-y-5 shadow-lg z-[400] backdrop-blur-md">
                    <div className=""><Link to="/aboutUs" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>About Us</Link><br /></div>
                    <div className=""><Link to="/calendar" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>Calendar</Link><br /></div>
                    <div className=""><Link to="/gallery" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>Gallery</Link><br /></div>
                    <div className=""><Link to="/sponsors" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>PartnerZ & SponsorZ</Link><br /></div>
                </div>
            )}
            {isOpen && <EventModal activeEvent={featuredEvent} onClose={closeModal} /> }
        </>
    )
}

export default Header;