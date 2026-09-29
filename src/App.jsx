import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import Configurations from './components/Configurations';
import Amenities from './components/Amenities';
import MasterPlanSection from './components/MasterPlanSection';
import Gallery from './components/Gallery';
import LocationSection from './components/LocationSection';
import DeveloperSection from './components/DeveloperSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    image: '',
    title: ''
  });

  const [selectedConfig, setSelectedConfig] = useState('3.5 BHK');

  const scrollTo = (id) => {
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

  const handleOpenLightbox = (image, title) => {
    setLightbox({
      isOpen: true,
      image,
      title
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const handleBookUnit = (configType) => {
    setSelectedConfig(configType.includes('4.5') ? '4.5 BHK' : '3.5 BHK');
    scrollTo('enquire');
  };

  return (
    <div className="yoo-app">
      <Navbar onBookClick={() => scrollTo('enquire')} />
      
      <main>
        <Hero 
          onEnquireClick={() => scrollTo('enquire')}
          onExploreClick={() => scrollTo('configurations')}
        />

        <StatsStrip />

        <About 
          onEnquireClick={() => scrollTo('enquire')}
        />

        <Configurations 
          onOpenLightbox={handleOpenLightbox}
          onBookClick={handleBookUnit}
        />

        <Amenities 
          onEnquireClick={() => scrollTo('enquire')}
        />

        <MasterPlanSection 
          onOpenLightbox={handleOpenLightbox}
        />

        <Gallery 
          onOpenLightbox={handleOpenLightbox}
        />

        <LocationSection />

        <DeveloperSection />

        <ContactSection 
          initialConfig={selectedConfig}
        />
      </main>

      <Footer 
        onScrollTo={(e, id) => {
          e.preventDefault();
          scrollTo(id);
        }}
      />

      <FloatingActions />

      <LightboxModal 
        isOpen={lightbox.isOpen}
        image={lightbox.image}
        title={lightbox.title}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
