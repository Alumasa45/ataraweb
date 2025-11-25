import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Atara Studio</h3>
            <p>Your sanctuary for transformation through movement. Authentic & elegant practices in a space designed for you.</p>
          </div>
          
          <div className="footer-section">
            <h4>Classes</h4>
            <ul>
              <li><a href="#pilates">Pilates</a></li>
              <li><a href="#dance">Dance</a></li>
              <li><a href="#strength">Strength Training</a></li>
              <li><a href="#yoga">Yoga</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Studio</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#instagram">📷</a>
              <a href="#facebook">📘</a>
              <a href="#youtube">📺</a>
            </div>
            <p>123 Wellness Way, Suite 456 (555) 123 Atara</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Atara Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;