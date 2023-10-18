import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='title'>Keerthi Prasanth</h1>
      <div className='links'>
      <Link className='home_link' to='/home'>Home</Link>
      <Link className='skills_link' to='/skills'>Skills</Link>
      <Link className='contact_link' to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
