import React from 'react';
import { Phone, MapPin, Globe, Shield } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Footer({ onScrollTo }) {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>{projectData.name}</h3>
            <p style={{ marginBottom: '14px' }}>
              NIBM's Only Global Address. Branded residences curated by Sussanne Khan for YOO, 
              developed by DASSCON and powered by Tricon.
            </p>
            <div className="footer-rera-box">
              <div>MahaRERA Phase 1: <b>{projectData.reraPhase1}</b></div>
              <div>MahaRERA Phase 2 (Tower 2): <b>{projectData.reraPhase2}</b></div>
              <div style={{ fontSize: '11px', marginTop: '4px', color: '#e7c789' }}>
                Verify at: <a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>maharera.maharashtra.gov.in</a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <a href="#about" onClick={(e) => onScrollTo(e, 'about')}>The Vision &amp; Architecture</a>
            <a href="#configurations" onClick={(e) => onScrollTo(e, 'configurations')}>3.5 &amp; 4.5 BHK Residences</a>
            <a href="#amenities" onClick={(e) => onScrollTo(e, 'amenities')}>Three Realms of Amenities</a>
            <a href="#masterplan" onClick={(e) => onScrollTo(e, 'masterplan')}>Master Layout &amp; Videos</a>
            <a href="#gallery" onClick={(e) => onScrollTo(e, 'gallery')}>Photo Gallery</a>
            <a href="#location" onClick={(e) => onScrollTo(e, 'location')}>Location &amp; Connectivity</a>
          </div>

          <div className="footer-col">
            <h4>Sales Lounge</h4>
            <p>{projectData.address}</p>
            <p style={{ color: 'var(--gold-bright)' }}>Possession: {projectData.possession}</p>
            <p style={{ color: '#9ce0a6', fontSize: '12px' }}>● Show Flat Ready For Visits</p>
          </div>

          <div className="footer-col">
            <h4>Get in Touch</h4>
            <a href={`tel:${projectData.phone}`}>
              <Phone size={14} style={{ display: 'inline', marginRight: '6px' }} />
              {projectData.phoneFormatted}
            </a>
            <a href={`https://wa.me/${projectData.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              WhatsApp Sales Concierge
            </a>
            <a href="#enquire" onClick={(e) => onScrollTo(e, 'enquire')} style={{ color: 'var(--gold-bright)' }}>
              Book Private VIP Visit &rarr;
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} YOO ONE Pune. All rights reserved.</div>
          <div>Design Collaboration: Sussanne Khan for YOO | Architecture: Morphogenesis</div>
        </div>

        <div className="footer-disclaimer">
          Disclaimer: This website is for informational and artistic representation purposes only and does not constitute 
          an offer, contract, or binding legal commitment. The project is registered with MahaRERA vide Reg. No. Phase I: 
          P52100045735 and Phase II: PR1262022600430 (DASSCON Realty Pvt. Ltd.). All dimensions, floor plans, layouts, 
          amenities, images, and specifications are indicative and subject to change by competent authorities and the developer 
          in accordance with statutory norms. *T&amp;C Apply.
        </div>
      </div>
    </footer>
  );
}
