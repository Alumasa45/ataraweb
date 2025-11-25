import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { User, Phone, CreditCard, Package } from 'lucide-react';
import './BookNow.css';

const BookNow: React.FC = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    referenceNumber: '',
    membership: selectedPlan
  });

  const membershipOptions = [
    'Mat Membership - Starter (4 classes/month)',
    'Reformer Membership - Starter (4 classes/month)',
    'Hybrid Membership (5 reformer + 5 mat classes)',
    'Walk-in Session',
    '4-Session Bundle',
    '10-Session Bundle',
    '15-Session Bundle',
    'Private Session (55 minutes)',
    'Duet Session (2 People, 55 minutes)',
    '5 Private Sessions Package',
    '10 Private Sessions Package',
    'Yoga Drop-in Class',
    'Reformer Drop-in Class',
    'Dance Drop-in Class'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const templateParams = {
      to_email: 'ataradesk25@gmail.com',
      from_name: formData.name,
      phone: formData.phone,
      membership: formData.membership,
      reference_number: formData.referenceNumber,
      message: `New booking request from ${formData.name}\n\nPhone: ${formData.phone}\nMembership: ${formData.membership}\nReference Number: ${formData.referenceNumber}`
    };

    try {
      await emailjs.send(
        'service_mxytlq8',
        'template_ibjelf7',
        templateParams,
        '9sR57EL2XtFwKJByt'
      );
      alert('Booking request sent successfully! We will contact you shortly.');
      setFormData({ name: '', phone: '', referenceNumber: '', membership: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('There was an error sending your booking request. Please try again or contact us directly.');
    }
  };

  return (
    <section className="book-now">
      <div className="book-now-container">
        <div className="book-now-header">
          <h1>Book Your Session</h1>
          <p>Complete your booking by filling out the form below</p>
        </div>

        <div className="booking-form-wrapper">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <User size={20} />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <Phone size={20} />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g., 0791525442"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="membership">
                <Package size={20} />
                Select Membership/Service
              </label>
              <select
                id="membership"
                name="membership"
                value={formData.membership}
                onChange={handleInputChange}
                required
              >
                <option value="">Choose your membership or service</option>
                {membershipOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="referenceNumber">
                <CreditCard size={20} />
                Payment Reference Number
              </label>
              <input
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                value={formData.referenceNumber}
                onChange={handleInputChange}
                placeholder="Enter your payment reference number"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Complete Booking
            </button>
          </form>

          <div className="booking-info">
            <h3>Payment Information</h3>
            <div className="payment-details">
              <p><strong>M-Pesa Paybill:</strong> 4188419</p>
              <p><strong>Account Number:</strong> YOUR NAME</p>
              <p><strong>Email:</strong> ataradesk25@gmail.com</p>
              <p><strong>Phone:</strong> 0791525442</p>
            </div>
            <div className="booking-note">
              <p><strong>Note:</strong> Your booking will be confirmed once payment is received and verified. Please keep your reference number for our records.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookNow;