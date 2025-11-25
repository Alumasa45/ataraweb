import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
    };

    try {
      await emailjs.send(
        'service_mxytlq8',
        'template_ibjelf7',
        templateParams,
        '9sR57EL2XtFwKJByt'
      );
      alert('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>Ready to start your wellness journey? We'd love to hear from you.</p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Class Information">Class Information</option>
                    <option value="Membership">Membership</option>
                    <option value="Private Sessions">Private Sessions</option>
                    <option value="Studio Rental">Studio Rental</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            
            <div className="contact-info-grid">
              <div className="info-item">
                <MapPin size={24} color="#D4A574" />
                <div>
                  <h3>Location</h3>
                  <p>One Stop Arcade<br />Langata Road, Karen<br />Nairobi, Kenya</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={24} color="#D4A574" />
                <div>
                  <h3>Phone</h3>
                  <p>0791525442</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={24} color="#D4A574" />
                <div>
                  <h3>Email</h3>
                  <p>ataradesk25@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <Clock size={24} color="#D4A574" />
                <div>
                  <h3>Studio Hours</h3>
                  <p>Monday - Saturday: 7:00 AM - 7:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#instagram">📷 @wellnessbyatara</a>
                <a href="#instagram">📷 @wellnessbyatara5</a>
              </div>
            </div>

            <div className="quick-contact">
              <h3>Quick Contact</h3>
              <p>For immediate assistance or urgent inquiries, please call us directly at <strong>0791525442</strong> during studio hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;