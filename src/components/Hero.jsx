import React from 'react';
import { ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh Dairy Products from Our Farm to Your Home
          </h1>
          <p className="hero-subtitle">
            Experience the rich, authentic taste of traditional Nepalese dairy. Freshly produced daily in Mahalbari.
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
            src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80" 
            alt="Fresh Milk in a glass bottle"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
