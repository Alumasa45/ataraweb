import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, Heart, Award, Users, Target } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'We prioritize your holistic well-being, nurturing both body and mind through mindful movement.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome, valued, and inspired to grow.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional instruction and creating transformative experiences for all.'
    },
    {
      icon: Award,
      title: 'Authenticity',
      description: 'Staying true to traditional practices while embracing modern wellness approaches.'
    }
  ];

  return (
    <section className="about">
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Atara Studio</h1>
          <p>Your sanctuary for transformation through movement</p>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2025, Atara Movement Studio was born from a vision to create a sanctuary where 
                movement becomes meditation, strength becomes grace, and every session brings you closer to 
                your truest self.
              </p>
              <p>
                Located in the heart of Karen at One Stop Arcade, Langata Road, we've designed a space that 
                honors the transformative power of mindful movement. Our name "Atara" means "crown" in Hebrew, 
                symbolizing the dignity and strength we help each client discover within themselves.
              </p>
              <p>
                We believe that wellness is not a destination but a journey of continuous growth, self-discovery, 
                and empowerment. Through our carefully curated classes and expert instruction, we guide you 
                toward a deeper connection with your body, mind, and spirit.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Atara Studio Interior" 
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={40} color="#D4A574" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To provide a premium wellness experience that transforms lives through the power of movement. 
              We are dedicated to creating an inclusive, supportive environment where individuals of all 
              fitness levels can discover their strength, find their balance, and embrace their journey 
              toward optimal well-being.
            </p>
          </div>
        </div>

        {/* Location & Hours */}
        <div className="info-section">
          <div className="info-grid">
            <div className="info-card">
              <MapPin size={32} color="#D4A574" />
              <h3>Location</h3>
              <p>One Stop Arcade<br />Langata Road, Karen<br />Nairobi, Kenya</p>
            </div>
            <div className="info-card">
              <Clock size={32} color="#D4A574" />
              <h3>Studio Hours</h3>
              <p>Monday - Saturday: 7:00 AM - 7:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <h2>Ready to Begin Your Journey?</h2>
          <p>Join our community and discover the transformative power of mindful movement.</p>
          <div className="cta-buttons">
            <button 
              className="primary-btn"
              onClick={() => navigate('/book-now')}
            >
              Book Your First Class
            </button>
            <button 
              className="secondary-btn"
              onClick={() => navigate('/classes')}
            >
              View Our Classes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;