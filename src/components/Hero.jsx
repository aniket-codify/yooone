import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
            NEW LAUNCH
          </div>

          <div className="hero-card-top">
            <h1>{projectData.name}</h1>
            <p className="by">Branded by Sussanne Khan for YOO</p>
            <p className="at">At NIBM, South Pune</p>
          </div>

          <div className="hero-highlights">
            <div>
              <span className="dot">&#9670;</span> 200 Acres Forest Views — Sahyadri Hills
            </div>
            <div>
              <span className="dot">&#9670;</span> 1.5-Acre Sky Realm: Infinity Pool &amp; Sky Bar
            </div>
            <div>
              <span className="dot">&#9670;</span> Four Access Corridors for Easy Entry/Exit
            </div>
          </div>

          <div className="hero-card-bottom">
            <p className="configs">Premium <b>3.5 &amp; 4.5 BHK</b> Residences</p>
            <p className="note">Starting ₹3.01 Cr* Onwards · Show Flat Ready</p>
            <button 
              className="btn btn-gold hero-card-cta" 
              onClick={onEnquireClick}
              id="heroEnquireBtn"
            >
              Enquire Now
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
