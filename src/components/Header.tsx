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
    const [showComingSoon, setShowComingSoon] = useState(false);

    return ( 
        <>
            <header className="flex items-center w-full px-6 py-4 fixed top-0 z-[500] bg-gradient-to-b from-red-800 via-red-900/90 to-zinc-800/70 backdrop-blur-md shadow-md"> 

                {/* Logo */}
                <div className="flex-shrink-0 w-[28vw] lg:w-[13vw]">
                <Link 
                    to="/home" 
                    className="text-white transition duration-300 ease-in-out text-lg flex flex-row"
                    onClick={() => {if(menuOpen) { setMenuOpen(false); }}}
                >
                    <img src={logo2} className="h-[60px] md:h-10 mr-3 -translate-y-1" alt="585Z Logo" />
                    <span className="hidden md:block text-xl truncate drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)]"> 585FighterZ</span>
                </Link>
                </div>

                {/* Desktop View */}
                    <ul className='hidden md:flex flex-1 min-w-0 justify-center gap-8 text-lg'>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/aboutUs" className="menu-link"> About Us </Link> </li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/calendar" className="menu-link"> Calendar</Link></li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/gallery" className="menu-link">Gallery</Link></li>
                        <li className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"> <Link to="/sponsors" className="menu-link"><span className="hidden lg:inline">PartnerZ & SponsorZ </span> <span className="lg:hidden">PartnerZ</span></Link></li>
                        <li 
                            className="inline-block drop-shadow-[0_4.2px_4.2px_rgba(1,1,1,0.8)] mr-10"
                            onClick={() => {
                                setShowComingSoon(true);
                                setTimeout(() => setShowComingSoon(false), 1800);
                            }}
                        >
                            <span className="menu-link">Merch</span>
                            {showComingSoon && (
                                <div className="absolute mt-2 px-3 py-1 text-sm rounded-md bg-black/80 text-white shadow-lg animate-fade-in">
                                    Coming Soon
                                </div>
                            )}
                        </li>
                    </ul>

                <div className="flex items-center gap-4">
                    <button className=" hidden md:flex bg-transparent px-5" onClick={toggleModal}><GiAcousticMegaphone size={29} color='white'/></button>

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
                <div className={`
                        md:hidden fixed inset-0 z-[400]
                        bg-zinc-800/95 backdrop-blur-md
                        flex flex-col items-center justify-center gap-6
                        transition-all duration-500 ease-in-out
                        ${menuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-100 pointer-events-none"
                        }
                    `}>
                    <div className=""><Link to="/aboutUs" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>About Us</Link><br /></div>
                    <div className=""><Link to="/calendar" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>Calendar</Link><br /></div>
                    <div className=""><Link to="/gallery" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>Gallery</Link><br /></div>
                    <div className=""><Link to="/sponsors" className="text-gray-400 text-2xl" onClick={() => setMenuOpen(false)}>PartnerZ & SponsorZ</Link><br /></div>
                    <div 
                        className="text-gray-400 text-3xl"
                        onClick={() => {
                                setShowComingSoon(true);
                                setTimeout(() => setShowComingSoon(false), 1800);
                            }}   
                    ><p>More...</p></div>
                    {showComingSoon && (
                                <div className="absolute w-full mt-2 px-3 py-10 text-3xl rounded-md bg-black/80 text-white shadow-lg animate-fade-in">
                                    Coming Soon
                                </div>
                            )}
                </div>
            )}
            {isOpen && <EventModal activeEvent={featuredEvent} onClose={closeModal} /> }
        </>
    )
}

export default Header;