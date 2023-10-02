import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img src="/Logo.svg" alt="Logo" />
      </div>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/reservations" onClick={toggleMenu}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" onClick={toggleMenu}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
