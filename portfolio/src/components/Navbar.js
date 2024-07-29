import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-gray-800 text-white p-4 flex items-center justify-between fixed w-full z-10 top-0 opacity-5">
      <h1 className="h1 text-xl lg:text-2xl font-bold">KEERTHI PRASANTH RAVICHANDRAN</h1>
      <div className="flex space-x-10">
        <Link className="hover:text-gray-300" to="#home">
          HOME
        </Link>
        <Link className="hover:text-gray-300" to="#skills">
          SKILLS
        </Link>
        <Link className="hover:text-gray-300" to="#projects">
          PROJECTS
        </Link>
        <Link className="hover:text-gray-300" to="#timeline">TIMELINE</Link>
        <Link className="hover:text-gray-300" to="#hobbies">
          HOBBIES
        </Link>
        <Link className="hover:text-gray-300" to="#contact">
          CONTACT
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
