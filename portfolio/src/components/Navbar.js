import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "./Navbar.css"
import "../App.css";

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
      <h1>KP</h1>
      <nav ref={navRef}>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#">
          Home
        </a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#skills">
          Skills
        </a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#projects">
          Projects
        </a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#timeline">
          Timeline
        </a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#hobbies">
          Hobbies
        </a>
        <a className="m-0 mx-6 hover:text-yellow-500" href="/#contact">
          Contact
        </a>
        <button
          className="nav-btn nav-close-btn p-1 cursor-pointer bg-transparent border-none outline-none decoration-red-700 invisible opacity-0 text-base"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg font-semibold transition-all ${
            isLightMode
              ? "bg-customBackground text-customTextColor hover:bg-gray-300"
              : "bg-customTextColor text-customBackground hover:bg-gray-700"
          }`}
        >
          {isLightMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        <button className="md:hidden text-xl p-2" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
