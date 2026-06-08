import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Get in Touch</h4>
        <h2 style={{ color: 'var(--primary-dark)' }}>Contact Us For Orders</h2>
      </div>

      <div className="container contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <div className="info-item">
            <MapPin size={24} />
            <div>
              <h4 style={{ marginBottom: "0.2rem" }}>Our Location</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>Kudiya 33007,<br />Nepal</p>
            </div>
          </div>

          <div className="info-item">
            <Phone size={24} />
            <div>
              <h4 style={{ marginBottom: "0.2rem" }}>Phone</h4>
              <a href="tel:+9779857080374">+977 9857080374</a>
            </div>
          </div>

          <div className="info-item">
            <Mail size={24} />
            <div>
              <h4 style={{ marginBottom: "0.2rem" }}>Email</h4>
              <a href="mailto:basisthadairy123@gmail.com">basisthadairy123@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <Clock size={24} />
            <div>
              <h4 style={{ marginBottom: "0.2rem" }}>Business Hours</h4>
              <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>Everyday: 6:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-dark)" }}>Send a Message</h3>
          <form action="https://formsubmit.co/basisthadairy123@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Website Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" className="form-control" placeholder="Sagar Dhakal" required />
            </div>
            <div className="form-group">
              <label>Email Address / Phone Number</label>
              <input type="text" name="contact" className="form-control" placeholder="Your contact detail" required />
            </div>
            <div className="form-group">
              <label>Message / Order Details</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                placeholder="I would like to order..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
