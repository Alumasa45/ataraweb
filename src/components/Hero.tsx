import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Move with Purpose.<br />Transform from Within.</h1>
        <p>Premium Pilates, Dance, Strength & Yoga in a Sanctuary Designed for You</p>
        <button 
          className="cta-btn"
          onClick={() => navigate('/classes')}
        >
          Begin Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;