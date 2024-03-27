import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Korrekter Import von Link
import './Menu.css';

const SwipeMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };



 const emailAddress = 'miloslavbenzono@gmail.com';


  return (
    <div className="swipe-menu-container">
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>💎</Link></li>
          <li><Link to="/moon" onClick={closeMenu}>🌕</Link></li>
          <li> <a href={`mailto:${emailAddress}`} onClick={closeMenu}>✉️</a></li>
        </ul>
      </div>
      <div className="content">
        <button className="frites-menu-button" onClick={toggleMenu}>
          <div className={`burger ${menuOpen ? 'open' : ''}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </button>
        <p>Liebe Beryll, ich bin froh dass es Dich gibt!</p>
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default SwipeMenu;
