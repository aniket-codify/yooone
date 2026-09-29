import React, { useState } from 'react';
import { ZoomIn, Play, Film, Map, CheckCircle2 } from 'lucide-react';

export default function MasterPlanSection({ onOpenLightbox }) {
  const [activeVideo, setActiveVideo] = useState('trailer');

  return (
    <section className="pad cream" id="masterplan">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Master Planning &amp; Cinematic Walkthrough</span>
          <h2>6.75 Acres of Thoughtful Architectural Design</h2>
          <p>
            Master-planned by Morphogenesis, YOO ONE is engineered for optimal cross-ventilation, 
            natural daylighting, seamless vehicular flow, and uninterrupted panoramic views toward the forest.
          </p>
        </div>

        {/* Master Plan Showcase Card */}
        <div className="plan-showcase">
          <div className="plan-info">
            <span style={{ color: 'var(--gold-bright)', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Master Layout Architecture
            </span>
            <h3>Master Plan</h3>
            <p>
              Discover the low-density master layout featuring 4 residential towers, dedicated vehicular drop-offs, 
              expansive central podium amenities, and exclusive connectivity to the 1.5-acre rooftop realm.
            </p>

            <div className="plan-legend">
              <div className="legend-item">
                <span className="dot"></span>
                <span>Grand Entrance Gateway &amp; Water Feature</span>
              </div>
              <div className="legend-item">
                <span className="dot"></span>
                <span>Tower 2 Serenity (Phase 2 Launch)</span>
              </div>
              <div className="legend-item">
                <span className="dot"></span>
                <span>8,500 Sq.Ft Grand Clubhouse</span>
              </div>
              <div className="legend-item">
                <span className="dot"></span>
                <span>Central Multipurpose Sports Turf</span>
              </div>
              <div className="legend-item">
                <span className="dot"></span>
                <span>Children's Play &amp; Sensory Gardens</span>
              </div>
              <div className="legend-item">
                <span className="dot"></span>
                <span>200-Acre Forest Green Buffer</span>
              </div>
            </div>

            <button 
              className="btn btn-gold"
              onClick={() => onOpenLightbox(`${import.meta.env.BASE_URL}assets/master-plan-web.jpg`, 'YOO ONE Master Layout Plan (6.75 Acres)')}
            >
              <ZoomIn size={16} /> View High-Res Master Plan
            </button>
          </div>

          <div 
            className="plan-img-wrap"
            onClick={() => onOpenLightbox(`${import.meta.env.BASE_URL}assets/master-plan-web.jpg`, 'YOO ONE Master Layout Plan (6.75 Acres)')}
            title="Click to view full 3x3ft master layout"
          >
            <img src={`${import.meta.env.BASE_URL}assets/master-plan-web.jpg`} alt="YOO ONE Master Plan Layout" loading="lazy" />
            <div className="plan-img-hover">
              <ZoomIn size={20} />
              <span>Inspect Master Plan In Detail</span>
            </div>
          </div>
        </div>

        {/* Cinematic Video Showcase */}
        <div className="video-card-container">
          <div className="video-player-box">
            <video 
              key={activeVideo}
              controls
              playsInline
              preload="metadata"
              poster={activeVideo === 'trailer' ? `${import.meta.env.BASE_URL}assets/hero-forest.jpg` : `${import.meta.env.BASE_URL}assets/living-hall.jpg`}
            >
              <source 
                src={activeVideo === 'trailer' ? `${import.meta.env.BASE_URL}assets/project-landscape-trailer.mp4` : `${import.meta.env.BASE_URL}assets/3bhk-walkthrouh.mp4`} 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="video-details">
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <button 
                className={`btn ${activeVideo === 'trailer' ? 'btn-gold' : 'btn-line-dark'}`}
                style={{ padding: '8px 16px', fontSize: '11.5px' }}
                onClick={() => setActiveVideo('trailer')}
              >
                <Film size={14} /> Landscape Trailer
              </button>
              <button 
                className={`btn ${activeVideo === 'walkthrough' ? 'btn-gold' : 'btn-line-dark'}`}
                style={{ padding: '8px 16px', fontSize: '11.5px' }}
                onClick={() => setActiveVideo('walkthrough')}
              >
                <Play size={14} /> 3 BHK Walkthrough
              </button>
            </div>

            <h3>
              {activeVideo === 'trailer' 
                ? 'Experience the Forest Vista' 
                : 'Step Inside the Show Residence'}
            </h3>
            
            <p>
              {activeVideo === 'trailer' 
                ? 'Watch the cinematic trailer highlighting the scale, sunset rooftop vistas, Sahyadri mountain backdrops, and signature exterior architecture of YOO ONE at NIBM.'
                : 'Take an exclusive video walkthrough of our ready show flat showcasing the double-height living hall, floor-to-ceiling French windows, custom Italian finishes, and expansive balconies.'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e7c789', fontSize: '13px' }}>
              <CheckCircle2 size={16} /> Show Flat Ready For Private In-Person Visits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
