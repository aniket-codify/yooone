import React from 'react';
import { GraduationCap, HeartPulse, Briefcase, ShoppingBag, Compass, MapPin } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function LocationSection() {
  return (
    <section className="cream pad" id="location">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Strategic Location</span>
          <h2>NIBM, South Pune — Calm Meets Unrivalled Connectivity</h2>
          <p>
            Convenience is one of the world's most understated luxuries. NIBM brings it naturally. 
            From established international schools and multispecialty healthcare to vibrant retail malls 
            and key IT tech hubs, everything essential exists within easy reach.
          </p>
        </div>

        <div className="connect-grid">
          <div>
            <div className="connect-img-box">
              <img src={`${import.meta.env.BASE_URL}assets/building-exterior.jpg`} alt="YOO ONE NIBM Pune Location" loading="lazy" />
            </div>
            <div style={{
              background: 'var(--white)',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(193, 152, 92, 0.25)',
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-dim)', fontWeight: '600', marginBottom: '8px' }}>
                <MapPin size={18} />
                <span>Sales Lounge Address</span>
              </div>
              <p style={{ fontSize: '14.5px', color: 'var(--text-dark)', marginBottom: '8px' }}>
                {projectData.address}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Surrounded by 200 acres of protected forest greens with multiple direct arterial access roads 
                connecting NIBM, Undri, Wanowrie, Hadapsar, and Camp.
              </p>
            </div>
          </div>

          <div className="landmark-cats">
            <div className="landmark-cat-card">
              <h4>
                <GraduationCap size={18} />
                <span>Education</span>
              </h4>
              <ul>
                {projectData.connectivity.schools.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span className="dist">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="landmark-cat-card">
              <h4>
                <HeartPulse size={18} />
                <span>Healthcare</span>
              </h4>
              <ul>
                {projectData.connectivity.healthcare.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span className="dist">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="landmark-cat-card">
              <h4>
                <ShoppingBag size={18} />
                <span>Leisure &amp; Clubs</span>
              </h4>
              <ul>
                {projectData.connectivity.leisure.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span className="dist">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="landmark-cat-card">
              <h4>
                <Briefcase size={18} />
                <span>Business &amp; IT Hubs</span>
              </h4>
              <ul>
                {projectData.connectivity.business.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span className="dist">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="landmark-cat-card" style={{ gridColumn: 'span 2' }}>
              <h4>
                <Compass size={18} />
                <span>Transit &amp; Key Corridors</span>
              </h4>
              <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 24px' }}>
                {projectData.connectivity.transit.map((item, i) => (
                  <li key={i}>
                    <span>{item.name}</span>
                    <span className="dist">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
