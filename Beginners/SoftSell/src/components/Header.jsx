import React, { useState } from 'react';
import Logo from '../assets/softsell-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Soft Sell Solutions" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={closeMenu}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={closeMenu}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#customer-testimonials" onClick={closeMenu}>
                Customer Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
