import React from 'react';
import { Sparkles, CheckCircle, Waves, Dumbbell, GlassWater, Sun } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Amenities({ onEnquireClick }) {
  return (
    <section className="cream-1 pad" id="amenities">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Life Beautifully Curated</span>
          <h2>Amenities Across Three Elevated Realms</h2>
          <p>
            A remarkable lifestyle is never defined by a single amenity. At YOO ONE, life unfolds 
            across three thoughtfully designed realms — each crafted to bring together wellness, 
            leisure, community, and elevated sky-high living.
          </p>
        </div>

        <div className="amenity-grid">
          {projectData.realms.map((realm, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-img-box">
                <img src={realm.image} alt={realm.title} loading="lazy" />
                <span className="amenity-realm-chip">{realm.level}</span>
              </div>
              <div className="amenity-body">
                <h3>{realm.title}</h3>
                <p className="desc">{realm.desc}</p>
                <ul className="amenity-list">
                  {realm.amenities.map((item, idx) => (
                    <li key={idx}>
                      <Sparkles size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight Strip */}
        <div style={{
          marginTop: '60px',
          background: 'var(--ink)',
          borderRadius: 'var(--radius-md)',
          padding: '36px 40px',
          border: '1px solid var(--gold-border)',
          color: 'var(--cream)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '28px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ color: 'var(--gold-bright)', fontSize: '24px', fontFamily: 'Cormorant Garamond, serif', fontWeight: '600', marginBottom: '4px' }}>
              1.5-Acre Sky Realm
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-light-muted)' }}>
              Sky Bar, Sunset Lounge &amp; Infinity Pool 21 floors up in the Pune sky.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--gold-bright)', fontSize: '24px', fontFamily: 'Cormorant Garamond, serif', fontWeight: '600', marginBottom: '4px' }}>
              8,500 Sq.Ft Clubhouse
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-light-muted)' }}>
              Designer social lounge, banquet room, multi-tier gym and wellness spa.
            </p>
          </div>
          <div>
            <div style={{ color: 'var(--gold-bright)', fontSize: '24px', fontFamily: 'Cormorant Garamond, serif', fontWeight: '600', marginBottom: '4px' }}>
              Sports &amp; Fitness
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-light-muted)' }}>
              Pickleball court, multipurpose sports court, jogging path, and outdoor yoga deck.
            </p>
          </div>
          <div>
            <button className="btn btn-gold" onClick={onEnquireClick} style={{ width: '100%' }}>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
