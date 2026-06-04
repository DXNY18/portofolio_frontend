import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
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
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/experience"
            className={location.pathname === '/experience' ? 'active' : ''}
            onClick={closeMenu}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={location.pathname === '/project' ? 'active' : ''}
            onClick={closeMenu}
          >
            Project
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
