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
            src="https://images.unsplash.com/photo-1599824632717-36e7807edeb8?auto=format&fit=crop&w=800&q=80" 
            alt="Cows in a field" 
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>About Us</h4>
          <h2>Dedicated to Providing the Best Quality Dairy</h2>
          <p>
            Basistha Dairy Yudog is a local dairy business located in Susta-2, Mahalbari, Nepal. We take pride in providing our community with fresh, high-quality dairy products and authentic traditional sweets.
          </p>
          <p style={{ marginTop: '1rem' }}>
            From our fresh milk to our rich, aromatic ghee, every product is made with love and traditional methods to ensure you get the best taste and nutrition possible.
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
