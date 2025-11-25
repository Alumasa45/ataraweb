import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

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
        <button 
          className="book-btn"
          onClick={() => navigate('/book-now')}
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;