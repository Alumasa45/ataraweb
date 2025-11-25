import React from 'react';
import { Target, Music, Leaf, User } from 'lucide-react';
import './Classes.css';

const Classes: React.FC = () => {
  const classes = [
    {
      title: 'Pilates',
      icon: Target,
      description: 'Build core strength, improve flexibility, and enhance body awareness through precise, controlled movements on mats and reformer equipment.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Yoga',
      icon: Leaf,
      description: 'Find balance and inner peace through flowing sequences, breathwork, and mindful movement that strengthens both body and mind.',
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Dance',
      icon: Music,
      description: 'Express yourself through rhythm and movement with our diverse dance styles including choreography, Kizomba, and Salsa classes.',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const trainers = [
    {
      name: 'Melody',
      specialties: 'Pilates & Yoga',
      description: 'Expert in mind-body connection, helping clients build strength while finding inner balance and flexibility.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Victryn',
      specialties: 'Intro Pilates Instructor',
      description: 'Specializes in welcoming beginners to Pilates with gentle, foundational movements and proper form guidance.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Flex',
      specialties: 'Dance Choreography',
      description: 'Creative choreographer who brings energy and artistry to dance, teaching expressive movement and rhythm.',
      image: 'https://images.unsplash.com/photo-1506629905607-45c9e8e4e0b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Joy',
      specialties: 'Kizomba',
      description: 'Passionate Kizomba instructor bringing the sensual, flowing movements of this beautiful Angolan dance style.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Pedro',
      specialties: 'Salsa & Kizomba',
      description: 'Dynamic instructor teaching the vibrant rhythms of Salsa and the smooth elegance of Kizomba dance.',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section className="classes">
      <div className="classes-container">
        {/* Classes Section */}
        <div className="classes-header">
          <h1>Our Classes</h1>
          <p>Discover the perfect class for your wellness journey</p>
        </div>

        <div className="classes-grid">
          {classes.map((classItem, index) => (
            <div key={index} className="class-card">
              <div className="class-image">
                <img src={classItem.image} alt={classItem.title} />
                <div className="class-overlay">
                  <classItem.icon size={40} color="white" />
                </div>
              </div>
              <div className="class-content">
                <h3>{classItem.title}</h3>
                <p>{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trainers Section */}
        <div className="trainers-section">
          <h2>Our Trainers</h2>
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <div key={index} className="trainer-card">
                <div className="trainer-image">
                  <img src={trainer.image} alt={trainer.name} />
                </div>
                <div className="trainer-info">
                  <h4>{trainer.name}</h4>
                  <span className="specialty">{trainer.specialties}</span>
                  <p>{trainer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;