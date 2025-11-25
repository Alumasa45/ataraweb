import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.jpg" alt="Atara Studio" className="logo-image" />
            <h1>ATARA STUDIO</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/classes">Classes</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <div className="header-right">
          <button 
            className="book-btn"
            onClick={() => navigate('/book-now')}
          >
            Book Now
          </button>
          
          <button className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Outside header container */}
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/classes" onClick={closeMenu}>Classes</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <button 
          className="mobile-book-btn"
          onClick={() => { navigate('/book-now'); closeMenu(); }}
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;