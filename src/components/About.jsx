import React from 'react';
import { Heart, Activity, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Heart size={20} />, title: "Family Owned", desc: "Local business with a passion for quality dairy." },
    { icon: <Activity size={20} />, title: "Healthy & Fresh", desc: "Products are delivered fresh, with high nutritional value." },
    { icon: <Leaf size={20} />, title: "100% Organic", desc: "Our cattle are grass-fed and naturally raised." }
  ];

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=80" 
            alt="Cows in a field" 
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>About Us</h4>
          <h2>Dedicated to Providing the Best Quality Dairy</h2>
          <p>
            Basistha Dairy Udhyog PVT Ltd is a local dairy business located in Kudiya 33007, Nepal. We specialize in producing and delivering 100% organic <strong>Buffalo and Cow milk</strong> directly from the local farms to your kitchen.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Whether it is the rich, creamy goodness of buffalo milk, the light and healthy benefits of cow milk, or our traditional ghee and sweets—every product is prepared with pure care to ensure you receive the finest farm-to-home quality.
          </p>

          <div className="features-list">
            {features.map((item, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{item.icon}</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
