import React from 'react';
import './MatAwaits.css';

const MatAwaits: React.FC = () => {
  return (
    <section className="mat-awaits">
      <div className="mat-awaits-container">
        <h2>Your Mat Awaits</h2>
        <p>
          Step into a space where movement becomes meditation, strength becomes grace,
          and every session brings you closer to your truest self.
        </p>
        <div className="mat-awaits-buttons">
          <button className="primary-btn">View Our Classes</button>
          <button className="secondary-btn">Book Your First Session</button>
        </div>
      </div>
    </section>
  );
};

export default MatAwaits;