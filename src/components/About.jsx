import React from 'react';
import { Trees, Maximize, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function About({ onEnquireClick }) {
  return (
    <section className="cream-1 pad" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{projectData.eyebrow}</span>
          <h2>A Gathering of Worlds. Designed by Sussanne Khan for YOO.</h2>
          <p>
            YOO One brings international branded luxury to Pune’s most scenic hillside neighbourhood.
            Overlooking 200 acres of protected reserved forest, each residence combines global design sensibility
            with nature, light, and complete freedom to personalize your private sanctuary.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="lead">
              Every home at YOO One begins with fresh forest air, abundant daylight, and the prestigious
              international design philosophy curated by Creative Director <b>Sussanne Khan for YOO</b>.
            </p>
            <p>
              Set within an expansive 6.75-acre private development at NIBM, YOO One is conceived for those
              who refuse to settle for ordinary. Here, floor-to-ceiling French windows dissolve the boundary between
              sumptuous interior living and an endless canopy of green, ensuring your perspective is permanently elevated.
            </p>

            <div className="about-features">
              <div className="feat-item">
                <Trees size={22} />
                <div>
                  <h4>200-Acre Forest Views</h4>
                  <p>Protected green tree canopy and unobstructed Sahyadri mountain breezes.</p>
                </div>
              </div>
              <div className="feat-item">
                <Maximize size={22} />
                <div>
                  <h4>Floor-to-Ceiling Windows</h4>
                  <p>Expansive French glass framing unbroken natural horizons and generous light.</p>
                </div>
              </div>
              <div className="feat-item">
                <Compass size={22} />
                <div>
                  <h4>Vastu Compliant</h4>
                  <p>Harmonious spatial planning aligned with natural energy and ventilation.</p>
                </div>
              </div>
              <div className="feat-item">
                <ShieldCheck size={22} />
                <div>
                  <h4>Low-Density Enclave</h4>
                  <p>Just 4 residences per floor across 4 towers for unparalleled family privacy.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px' }}>
              <button className="btn btn-solid-dark" onClick={onEnquireClick}>
                Schedule Private Presentation
              </button>
            </div>
          </div>

          <div className="about-img-box">
            <div className="about-main-img">
              <img src={`${import.meta.env.BASE_URL}assets/hero-forest.jpg`} alt="YOO ONE Pune forest panorama" />
            </div>
            <div className="about-badge-float">
              <div className="badge-gold">Phase 1 Sold Out</div>
              <p>Following a roaring response, Phase 2 (Tower 2 – Serenity) is now open for privileged bookings.</p>
              <div style={{ marginTop: '12px', fontSize: '11px', color: '#e7c789', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} /> Show Flat Ready for Visits
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
