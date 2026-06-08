import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logoImg from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="logo">
              <img src={logoImg} alt="Basistha Dairy Logo" className="logo-img" />
              <span className="logo-text">
                <span style={{ color: "var(--secondary-color)" }}>Basistha Dairy</span> Udhyog PVT Ltd
              </span>
            </div>
            <p className="footer-tagline">
              Fresh Dairy Products from Our Farm to Your Home
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook size={20} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Contact Details</h4>
            <ul className="footer-links">
              <li style={{ color: '#cbd5e1' }}>Kudiya 33007, Nepal</li>
              <li><a href="tel:+9779857080374">+977 9857080374</a></li>
              <li><a href="mailto:basisthadairy123@gmail.com">basisthadairy123@gmail.com</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Quality Guarantee</h4>
            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.6' }}>
              We ensure our products are purely organic and hygienically prepared to serve our local community.
            </p>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DGtech. All Rights Reserved.</p>
          <p style={{ marginTop: "0.5rem" }}>Developed by DGtech</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
