import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, User, Clock, Star, CheckCircle } from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate('/book-now', { state: { selectedPlan: planName } });
  };
  const memberships = [
    {
      title: 'Mat Membership',
      subtitle: 'Starter',
      icon: Calendar,
      classes: '4 classes/month',
      price: 'KSh 8,000',
      launchPrice: 'KSh 7,000',
      description: 'Perfect for beginners',
      popular: false
    },
    {
      title: 'Reformer Membership',
      subtitle: 'Starter',
      icon: Calendar,
      classes: '4 reformer classes/month',
      price: 'KSh 10,000',
      launchPrice: 'KSh 9,000',
      description: 'Explore reformer Pilates',
      popular: false
    },
    {
      title: 'Hybrid Membership',
      subtitle: 'Best Value',
      icon: Star,
      classes: '5 reformer + 5 mat classes',
      price: 'KSh 20,000',
      launchPrice: 'KSh 19,000',
      description: 'Complete wellness package',
      popular: true
    }
  ];

  const bundles = [
    { sessions: 'Walk-in', price: 'KSh 2,500', launch: 'KSh 2,000', desc: 'Try a single reformer session' },
    { sessions: '4-Session Bundle', price: 'KSh 10,000', launch: 'KSh 8,000', desc: 'Great way to start reformer training' },
    { sessions: '10-Session Bundle', price: 'KSh 25,000', launch: 'KSh 20,000', desc: 'Best for consistent practice' },
    { sessions: '15-Session Bundle', price: 'KSh 37,500', launch: 'KSh 30,000', desc: 'Excellent for committed clients' }
  ];

  const privateSessions = [
    { type: 'Private Session', duration: '55 minutes', price: 'KSh 4,500', desc: 'Personalized one-on-one session' },
    { type: 'Duet (2 People)', duration: '55 minutes', price: 'KSh 9,000', desc: 'Train with a friend' },
    { type: '5 Private Sessions', duration: '55 minutes each', price: 'KSh 20,000', desc: 'Save KSh 2,500' },
    { type: '10 Private Sessions', duration: '55 minutes each', price: 'KSh 40,000', desc: 'Save KSh 5,000 - best value' }
  ];

  const dropIns = [
    { class: 'Yoga', price: 'KSh 2,000', note: 'Pay per class' },
    { class: 'Reformer Class', price: 'KSh 3,000', note: 'Small group (max 5 clients)' },
    { class: 'Dance', price: 'KSh 1,500', note: 'Max 15 clients' }
  ];

  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Pricing & Memberships</h1>
          <p>Choose the perfect plan for your wellness journey</p>
        </div>

        {/* Memberships */}
        <div className="pricing-section">
          <h2>Monthly Memberships</h2>
          <div className="membership-grid">
            {memberships.map((membership, index) => (
              <div key={index} className={`membership-card ${membership.popular ? 'popular' : ''}`}>
                {membership.popular && <div className="popular-badge">Most Popular</div>}
                <div className="membership-icon">
                  <membership.icon size={32} color="#D4A574" />
                </div>
                <h3>{membership.title}</h3>
                <span className="subtitle">{membership.subtitle}</span>
                <div className="classes">{membership.classes}</div>
                <div className="pricing-info">
                  <div className="original-price">{membership.price}</div>
                  <div className="launch-price">{membership.launchPrice}</div>
                </div>
                <button 
                  className="select-btn"
                  onClick={() => handleSelectPlan(`${membership.title} - ${membership.subtitle}`)}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Session Bundles */}
        <div className="pricing-section">
          <h2>Session Bundles</h2>
          <div className="bundles-grid">
            {bundles.map((bundle, index) => (
              <div 
                key={index} 
                className="bundle-card clickable"
                onClick={() => handleSelectPlan(bundle.sessions)}
              >
                <h4>{bundle.sessions}</h4>
                <div className="bundle-pricing">
                  <span className="original">{bundle.price}</span>
                  <span className="launch">{bundle.launch}</span>
                </div>
                <p>{bundle.desc}</p>
                <button className="select-btn-small">Select</button>
              </div>
            ))}
          </div>
        </div>

        {/* Private Sessions */}
        <div className="pricing-section">
          <h2>Private & Semi-Private Sessions</h2>
          <div className="private-grid">
            {privateSessions.map((session, index) => (
              <div 
                key={index} 
                className="private-card clickable"
                onClick={() => handleSelectPlan(session.type)}
              >
                <div className="private-header">
                  <User size={24} color="#D4A574" />
                  <div>
                    <h4>{session.type}</h4>
                    <span className="duration">{session.duration}</span>
                  </div>
                </div>
                <div className="private-price">{session.price}</div>
                <p>{session.desc}</p>
                <button className="select-btn-small">Select</button>
              </div>
            ))}
          </div>
        </div>

        {/* Drop-in Classes */}
        <div className="pricing-section">
          <h2>Drop-in Classes</h2>
          <div className="dropin-grid">
            {dropIns.map((dropin, index) => (
              <div 
                key={index} 
                className="dropin-card clickable"
                onClick={() => handleSelectPlan(`${dropin.class} Drop-in Class`)}
              >
                <h4>{dropin.class}</h4>
                <div className="dropin-price">{dropin.price}</div>
                <p>{dropin.note}</p>
                <button className="select-btn-small">Select</button>
              </div>
            ))}
          </div>
        </div>

        {/* Policies */}
        <div className="policies-section">
          <h2>Studio Policies</h2>
          <div className="policies-grid">
            <div className="policy-item">
              <CheckCircle size={20} color="#D4A574" />
              <span>Booking confirmed once payment is received</span>
            </div>
            <div className="policy-item">
              <Clock size={20} color="#D4A574" />
              <span>Drop-in bookings must be made 24 hours in advance</span>
            </div>
            <div className="policy-item">
              <CheckCircle size={20} color="#D4A574" />
              <span>Cancellations must be made 24+ hours before class</span>
            </div>
            <div className="policy-item">
              <Users size={20} color="#D4A574" />
              <span>Arrive at least 10 minutes before class</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;