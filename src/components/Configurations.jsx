import React, { useState } from 'react';
import { ZoomIn, Bed, Bath, Compass, Check, ArrowRight } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Configurations({ onOpenLightbox, onBookClick }) {
  const [filter, setFilter] = useState('all');

  const filteredConfigs = filter === 'all' 
    ? projectData.configurations 
    : projectData.configurations.filter(c => c.type.includes(filter));

  return (
    <section className="cream pad" id="configurations">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Residences</span>
          <h2>3.5 &amp; 4.5 BHK — Crafted Without Compromise</h2>
          <p>
            Each home in Tower 2 (Serenity) is planned with complete freedom to personalize 
            interiors, generous floor heights, separate private bedrooms, and dedicated work or study spaces.
          </p>
        </div>

        <div className="config-tabs">
          <button 
            className={`config-tab-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Residences
          </button>
          <button 
            className={`config-tab-btn ${filter === '3.5' ? 'active' : ''}`}
            onClick={() => setFilter('3.5')}
          >
            3.5 BHK Residences
          </button>
          <button 
            className={`config-tab-btn ${filter === '4.5' ? 'active' : ''}`}
            onClick={() => setFilter('4.5')}
          >
            4.5 BHK Residences
          </button>
        </div>

        <div className="config-grid">
          {filteredConfigs.map((config) => (
            <div key={config.id} className="config-card">
              <div className="config-card-header">
                <span className="config-tag">{config.tag}</span>
                <span style={{ fontSize: '12px', color: '#93713a', fontWeight: '500' }}>Tower 2 Serenity</span>
              </div>
              <h3>{config.type}</h3>
              <div className="config-wings">{config.series}</div>

              <div 
                className="config-thumb-wrap"
                onClick={() => onOpenLightbox(config.planImg, `${config.type} — ${config.series}`)}
                title="Click to view high-resolution floor plan"
              >
                <img src={config.planImg} alt={`${config.type} unit plan`} loading="lazy" />
                <div className="config-thumb-hover">
                  <ZoomIn size={24} color="#e7c789" />
                  <span>Enlarge Floor Plan</span>
                </div>
              </div>

              <ul className="config-specs">
                <li>
                  <span>Carpet Area</span>
                  <span>{config.carpet}</span>
                </li>
                <li>
                  <span>Bedrooms &amp; Study</span>
                  <span>{config.bedrooms}</span>
                </li>
                <li>
                  <span>Bathrooms</span>
                  <span>{config.toilets}</span>
                </li>
                <li>
                  <span>Outdoor Space</span>
                  <span>{config.balcony}</span>
                </li>
                <li>
                  <span>Vistas</span>
                  <span>{config.view}</span>
                </li>
              </ul>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '18px' }}>
                {config.description}
              </p>

              <div className="config-price-row">
                <div className="config-price">{config.price}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '14px' }}>
                  {config.priceNote}
                </div>
                <button 
                  className="btn btn-gold" 
                  style={{ width: '100%' }}
                  onClick={() => onBookClick(config.type)}
                >
                  Book Site Visit <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
