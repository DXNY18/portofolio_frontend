import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        PORTNYADIN
      </Link>
      <button
        type="button"
        className="hamburger"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            onClick={closeMenu}
          >
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            onClick={closeMenu}
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
