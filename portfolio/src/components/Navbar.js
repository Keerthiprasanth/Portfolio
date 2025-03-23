import React, { useRef } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from "react-scroll";
// import "./Navbar.css"
import "../App.css";
import KP_logo from "../images/KP_logo.png";

function Navbar({ isLightMode, toggleTheme }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header
      className={`flex items-center justify-between p-0 pl-8 px-2 py-4 transition-all duration-500 ${
        isLightMode
          ? "bg-customTextColor text-customBackground"
          : "bg-customBackground text-customTextColor"
      } fixed w-screen md:w-screen top-0 left-0 z-50 font-volkhov`}
    >
      {/* <h1>KP</h1> */}
      <img
        src={KP_logo}
        alt="Logo"
        className={`w-12 h-8 object-cover`}
      />{" "}
      <nav ref={navRef}>
        <Link
          to="home"
          onClick={showNavbar}
          smooth={true}
          offset={-90}
          duration={500}
          className="m-0 mx-6 hover:text-additionalColors-6 md:hover:text-gray-400 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="skills"
          onClick={showNavbar}
          smooth={true}
          offset={-10}
          duration={500}
          className="m-0 mx-6 hover:text-additionalColors-6 md:hover:text-gray-400 cursor-pointer"
        >
          About Me
        </Link>
        <Link
          to="projects"
          onClick={showNavbar}
          smooth={true}
          offset={-10}
          duration={500}
          className="m-0 mx-6 hover:text-additionalColors-6 md:hover:text-gray-400 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="timeline"
          onClick={showNavbar}
          smooth={true}
          offset={-10}
          duration={500}
          className="m-0 mx-6 hover:text-additionalColors-6 md:hover:text-gray-400 cursor-pointer"
        >
          Timeline
        </Link>
        <Link
          to="contact"
          onClick={showNavbar}
          smooth={true}
          offset={-10}
          duration={500}
          className="m-0 mx-6 hover:text-additionalColors-6 md:hover:text-gray-400 cursor-pointer"
        >
          Contact Me
        </Link>
        <button
          className="nav-btn nav-close-btn text-4xl p-1 cursor-pointer bg-transparent border-none outline-none decoration-red-700 invisible opacity-0"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="relative inline-flex items-center h-8 w-14 rounded-full border-2 bg-gray-200 focus:outline-none focus:ring-2 border-indigo-500 transition-colors duration-300"
        >
          <span
            className={`absolute flex items-center justify-center w-6 h-6 transform rounded-full transition-transform duration-300 ${
              isLightMode
                ? "translate-x-6 bg-customBackground"
                : "translate-x-1 bg-customTextColor"
            }`}
          >
            {isLightMode ? (
              <FaMoon className="text-customTextColor text-8" />
            ) : (
              <MdOutlineWbSunny className="text-customBackground" />
            )}
          </span>
        </button>

        <button className="md:hidden text-xl p-2" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
