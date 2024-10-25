import {useState} from "react";
import { Link } from "react-router-dom";
import { getMediaUrl } from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="navbar relative flex items-center justify-between pt-[61px] z-[2] mx-[10%] max-[830px]:flex-col max-[830px]:items-start">
            <Link className="title text-[30px] font-semibold no-underline text-text" to="/">Portfolio</Link>
            <div className="menu flex max-[830px]:absolute max-[830px]:right-0 max-[830px]:mr-[10%] max-[830px]:flex-col max-[830px]:items-end max-[830px]:gap-[11px] max-[830px]:z-[3]">
                <img className="menu-btn menu-icon max-[830px]:block max-[830px]:cursor-pointer hidden" src={menuOpen ? getMediaUrl('nav/closeIcon.png') : getMediaUrl('nav/menuIcon.png')} alt="menu icon" onClick={() => {setMenuOpen(!menuOpen)}} />
                <ul className={`menuItems flex gap-[47px] [&_a]:text-[25px] max-[830px]:flex-col max-[830px]:items-center max-[830px]:gap-[13px] max-[830px]:rounded-[10px] max-[830px]:[background:linear-gradient(0deg,rgba(25,55,109,0.2)0%,rgba(25,55,109,1)100%)] max-[930px]:p-[24px_33px] ${menuOpen ? 'max-[830px]:flex max-[830px]:z-[1]' : 'max-[830px]:hidden'}`} onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About</a ></li>
                    <li className="hidden"><a href="#experience">Experience</a ></li>
                    <li><a href="#projects">Projects</a ></li>
                    <li><a href="#contact">Contact</a ></li>
                </ul>
            </div>
        </nav>
    );
}