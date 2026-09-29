import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Building, Trees } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Hero({ onEnquireClick, onExploreClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectData.heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectData.heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectData.heroSlides.length) % projectData.heroSlides.length);
  };

  return (
    <section className="hero" id="top" aria-label="Hero Showcase">
      <div className="hero-slider-bg">
        {projectData.heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            aria-hidden={index !== currentSlide}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="hero-overlay"></div>
      <div className="hero-bottom-fade"></div>

      <div className="wrap hero-content-wrap">
        <div className="hero-card">
          <div className="hero-card-badge">
            <Sparkles size={13} />
            <span>New Launch · Tower 2 – Serenity</span>
          </div>

          <h1>{projectData.name}</h1>
          <p className="hero-subtitle">Forest View 3.5 &amp; 4.5 Bed Luxury Residences</p>
          <p className="hero-loc">Branded by Sussanne Khan for YOO · NIBM, Pune</p>

          <div className="hero-highlights">
            <div className="hero-hl-item">
              <span className="hl-dot">&#9670;</span>
              <span><b>200 Acres Forest Backdrop:</b> Lifetime serene Sahyadri hill views</span>
            </div>
            <div className="hero-hl-item">
              <span className="hl-dot">&#9670;</span>
              <span><b>1.5-Acre Sky Realm:</b> Rooftop Sky Bar, Horizon Infinity Pool &amp; Lounge</span>
            </div>
            <div className="hero-hl-item">
              <span className="hl-dot">&#9670;</span>
              <span><b>Low Density Privacy:</b> 4 towers, only 4 residences per floor</span>
            </div>
            <div className="hero-hl-item">
              <span className="hl-dot">&#9670;</span>
              <span><b>French Windows:</b> Seamless floor-to-ceiling panoramic glass</span>
            </div>
          </div>

          <div className="hero-pricing-box">
            <div>
              <div className="price-tag">₹3.01 Cr* Onwards</div>
              <div className="price-sub">3.5 &amp; 4.5 BHK All Inclusive · CLP Plan</div>
            </div>
            <div>
              <span style={{ fontSize: '11px', color: '#e7c789', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Show Flat Ready
              </span>
            </div>
          </div>

          <div className="hero-card-actions">
            <button 
              className="btn btn-gold" 
              onClick={onEnquireClick}
              id="heroEnquireBtn"
            >
              Enquire Now
            </button>
            <button 
              className="btn btn-line-dark" 
              onClick={onExploreClick}
              id="heroExploreBtn"
            >
              View Residences
            </button>
          </div>
        </div>
      </div>

      <button className="hero-arrow prev" onClick={prevSlide} aria-label="Previous image slide">
        <ChevronLeft size={22} />
      </button>
      <button className="hero-arrow next" onClick={nextSlide} aria-label="Next image slide">
        <ChevronRight size={22} />
      </button>

      <div className="hero-dots">
        {projectData.heroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
