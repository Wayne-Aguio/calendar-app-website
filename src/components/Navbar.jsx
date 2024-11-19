import { useState } from "react";
import logo from "../assets/logo.png";
import { BiMenu, BiX } from "react-icons/bi";
import { BsDiscord, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-gray-500 bg-black/100 px-16
      py-4 text-white backdrop-blur-md md:justify-evenly">
      
      {/* Logo */}
      {isHomePage ? (
        <ScrollLink
          to="home"
          smooth={true}
          duration={100}
        >
          <img src={logo} alt="Logo" className="w-20 hover:scale-105 transition-all cursor-pointer" />
        </ScrollLink>
      ) : (
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 hover:scale-105 transition-all cursor-pointer" />
        </Link>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 font-semibold text-base">
        {isHomePage ? (
          <ScrollLink
            to="home"
            smooth={true}
            duration={100}
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            HOME
          </ScrollLink>
        ) : (
          <Link
            to="/"
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            HOME
          </Link>
        )}

        {isHomePage ? (
          <ScrollLink
            to="system"
            smooth={true}
            duration={100}
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            ABOUT
          </ScrollLink>
        ) : (
          <Link
            to="system"
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            ABOUT
          </Link>
        )}
        
        {isHomePage ? (
          <ScrollLink
            to="contact"
            smooth={true}
            duration={100}
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            CONTACT
          </ScrollLink>
        ) : (
          <Link
            to="contact"
            className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
          >
            CONTACT
          </Link>
        )}
        <Link
          to="/Download"
          className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
        >
          DOWNLOAD
        </Link>
      </ul>

      {/* Icons */}
      <ul className="hidden md:flex gap-5">
        <a href="https://www.youtube.com">
          <li className="text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <BsYoutube />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/wayne-aguio/">
          <li className="text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </li>
        </a>
        <li className="text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsDiscord />
        </li>
        <a href="https://www.facebook.com/wayne.aguio19">
          <li className="text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsFacebook />
          </li>
        </a>
      </ul>

      {/* Mobile Menu Toggle */}
      {isMenuOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed right-0 top-[112px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-500 bg-black/90 p-12">
          <ul className="flex flex-col gap-8 font-semibold text-base">
            {isHomePage ? (
              <ScrollLink
                to="home"
                smooth={true}
                duration={100}
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                HOME
              </ScrollLink>
            ) : (
              <Link
                to="/"
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                HOME
              </Link>
            )}
            {isHomePage ? (
              <ScrollLink
                to="system"
                smooth={true}
                duration={100}
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                ABOUT
              </ScrollLink>
            ) : (
              <Link
                to="system"
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                ABOUT
              </Link>
            )}
            {isHomePage ? (
              <ScrollLink
                to="contact"
                smooth={true}
                duration={100}
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                CONTACT
              </ScrollLink>
            ) : (
              <Link
                to="contact"
                onClick={menuOpen}
                className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
              >
                CONTACT
              </Link>
            )}
            <Link
              to="/Download"
              onClick={menuOpen}
              className="p-3 hover:bg-violet-600 hover:text-white rounded-md transition-all cursor-pointer"
            >
              DOWNLOAD
            </Link>
          </ul>
          <div className="flex gap-6 mt-6">
            <a href="https://www.youtube.com" onClick={menuOpen}>
              <BsYoutube className="text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100" />
            </a>
            <a href="https://www.linkedin.com/in/wayne-aguio/" onClick={menuOpen}>
              <BsLinkedin className="text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100" />
            </a>
            <a href="https://discord.com" onClick={menuOpen}>
              <BsDiscord className="text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100" />
            </a>
            <a href="https://www.facebook.com/wayne.aguio19" onClick={menuOpen}>
              <BsFacebook className="text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
