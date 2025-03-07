import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import "./Navbar.css"
import "../App.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="flex items-center justify-between p-0 pl-8 px-2 py-4 bg-blue-950 text-stone-50 fixed w-screen md:w-screen top-0 left-0 z-50">
      <h1>KP</h1>
      <nav ref={navRef}>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#">Home</a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#skills">Skills</a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#projects">Projects</a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#timeline">Timeline</a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#hobbies">Hobbies</a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#contact">Contact</a>
        <button className="nav-btn nav-close-btn p-1 cursor-pointer bg-transparent border-none outline-none decoration-red-700 invisible opacity-0 text-base" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn p-1 cursor-pointer bg-transparent border-none outline-none decoration-red-700 invisible opacity-0 text-base" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
    // <nav className="navbar bg-gray-800 text-white p-4 flex items-center justify-between fixed w-full z-10 top-0 opacity-100">
    //   <h1 className="h1 text-xl lg:text-2xl font-bold">
    //     KEERTHI PRASANTH RAVICHANDRAN
    //   </h1>
    //   <button
    //     className="text-white lg:hidden"
    //     onClick={toggleDropdown}
    //   >
    //     {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    //   </button>
    //   <div className={`flex flex-col lg:flex-row lg:items-center lg:space-x-10 ${isOpen ? "block" : "hidden"} lg:block`}>
    //     <Link className="hover:text-gray-300" to="#home">
    //       HOME
    //     </Link>
    //     <Link className="hover:text-gray-300" to="#skills">
    //       SKILLS
    //     </Link>
    //     <Link className="hover:text-gray-300" to="#projects">
    //       PROJECTS
    //     </Link>
    //     <Link className="hover:text-gray-300" to="#timeline">
    //       TIMELINE
    //     </Link>
    //     <Link className="hover:text-gray-300" to="#hobbies">
    //       HOBBIES
    //     </Link>
    //     <Link className="hover:text-gray-300" to="#contact">
    //       CONTACT
    //     </Link>
    //   </div>
    // </nav>
  )
}

export default Navbar
