import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/9779857080374" 
        className="whatsapp-float"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
