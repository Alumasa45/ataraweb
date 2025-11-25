import React from 'react';
import './Community.css';

const Community: React.FC = () => {
  const testimonials = [
    {
      text: "Atara isn't just a place to work out, it's a sanctuary where I found my strength.",
      author: "Sarah K.",
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      text: "Finally found my sanctuary in the city. The instructors are amazing!",
      author: "Maria L.",
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      text: "The personal development team makes all the difference.",
      author: "Jennifer K.",
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section className="community">
      <div className="community-container">
        <h2>The Atara Community</h2>
        <p>Real transformations. Real people. Real results.</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.author} />
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
                <span>- {testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;