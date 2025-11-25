import React from 'react';
import { Target, Music, Dumbbell, Leaf } from 'lucide-react';
import './Pillars.css';

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: 'Pilates',
      subtitle: 'Precision & Core Strength',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: Target
    },
    {
      title: 'Dance',
      subtitle: 'Fluidity & Expression',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: Music
    },
    {
      title: 'Strength',
      subtitle: 'Power & Resilience',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: Dumbbell
    },
    {
      title: 'Yoga',
      subtitle: 'Balance & Clarity',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: Leaf
    }
  ];

  return (
    <section className="pillars">
      <div className="pillars-container">
        <h2>The Pillars of Atara</h2>
        <p>Four pillars lead. One transformative experience.</p>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-image">
                <img src={pillar.image} alt={pillar.title} />
              </div>
              <div className="pillar-icon">
                <pillar.icon size={32} color="#D4A574" />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;