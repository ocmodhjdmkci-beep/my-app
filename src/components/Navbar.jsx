import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return <>
    <div className="navbar fixed-top justify-content-between align-items-center">
        <div className="container">
            <div className="logo">
                <Link to="" className='text-white fw-bold text-decoration-none fs-1'>Start Framework</Link>
            </div>
            <div className="links  ">
                <NavLink to="about">ABOUT</NavLink>
                <NavLink to="portfolio">PORTFOLIO</NavLink>
                <NavLink to="contact">CONTACT</NavLink>
            </div>
        </div>
    </div>
  </>
}
