import React from 'react';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Basistha Dairy Udhyog PVT Ltd
          </h1>
          <p className="hero-subtitle">
            Fresh milk, ghee, dahi, mohi, rasbari, and dairy treats prepared with local care in Kudiya 33007, Nepal.
          </p>
          
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#products" className="btn btn-primary">
              View Products <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <ShieldCheck size={24} /> 100% Organic
            </div>
            <div className="badge">
              <MapPin size={24} /> Local Farm
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* We'll use a local image placeholder for now, usually you'd add real assets */}
          <img 
            src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=900&q=80" 
            alt="Cow at a dairy farm"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
