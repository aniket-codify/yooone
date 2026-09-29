import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking for active state
      const sections = ['about', 'configurations', 'amenities', 'masterplan', 'gallery', 'location', 'enquire'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
        <div className="wrap nav-inner">
          <a href="#top" className="brand-wrap" onClick={(e) => scrollToSection(e, 'top')}>
            <span className="brand-logo-text">{projectData.name}</span>
            <span className="brand-tag">Tower 2 Serenity<br />NIBM, Pune</span>
          </a>

          <nav className="links" aria-label="Main Navigation">
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'about')}
            >
              About
            </a>
            <a 
              href="#configurations" 
              className={activeSection === 'configurations' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'configurations')}
            >
              Residences
            </a>
            <a 
              href="#amenities" 
              className={activeSection === 'amenities' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'amenities')}
            >
              Amenities
            </a>
            <a 
              href="#masterplan" 
              className={activeSection === 'masterplan' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'masterplan')}
            >
              Master Plan
            </a>
            <a 
              href="#gallery" 
              className={activeSection === 'gallery' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'gallery')}
            >
              Gallery
            </a>
            <a 
              href="#location" 
              className={activeSection === 'location' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'location')}
            >
              Location
            </a>
            <a 
              href="#enquire" 
              className={activeSection === 'enquire' ? 'active' : ''} 
              onClick={(e) => scrollToSection(e, 'enquire')}
            >
              Contact
            </a>
          </nav>

          <div className="nav-cta">
            <button 
              className="btn btn-gold" 
              onClick={(e) => scrollToSection(e, 'enquire')}
              id="navSiteVisitBtn"
            >
              Book Site Visit
            </button>
            <button 
              className="nav-toggle" 
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} color="#e7c789" /> : <Menu size={24} color="#e7c789" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`} id="mobilePanel">
        <button 
          className="mobile-close" 
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation"
        >
          &times;
        </button>
        <a href="#about" className="mobile-link" onClick={(e) => scrollToSection(e, 'about')}>About</a>
        <a href="#configurations" className="mobile-link" onClick={(e) => scrollToSection(e, 'configurations')}>Residences (3.5 &amp; 4.5 BHK)</a>
        <a href="#amenities" className="mobile-link" onClick={(e) => scrollToSection(e, 'amenities')}>Three Realms of Amenities</a>
        <a href="#masterplan" className="mobile-link" onClick={(e) => scrollToSection(e, 'masterplan')}>Master Plan &amp; Film</a>
        <a href="#gallery" className="mobile-link" onClick={(e) => scrollToSection(e, 'gallery')}>Photo Gallery</a>
        <a href="#location" className="mobile-link" onClick={(e) => scrollToSection(e, 'location')}>Location &amp; Connectivity</a>
        <a href="#enquire" className="mobile-link" onClick={(e) => scrollToSection(e, 'enquire')}>Contact Sales Lounge</a>
        <button 
          className="btn btn-gold" 
          style={{ marginTop: '20px', width: '100%' }}
          onClick={(e) => scrollToSection(e, 'enquire')}
        >
          Book Private Site Visit
        </button>
      </div>
    </>
  );
}
