import React, { useState } from 'react';
import { ZoomIn, Eye } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function Gallery({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Exterior & Nature', 'Rooftop Realm', 'Interiors'];

  const filteredItems = activeCategory === 'All'
    ? projectData.gallery
    : projectData.gallery.filter(item => item.category === activeCategory);

  return (
    <section className="cream-1 pad" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Visual Gallery</span>
          <h2>A Closer Look at Elevated Living</h2>
          <p>
            Immerse yourself in the visual splendor of YOO ONE — from sunset perspectives 
            across the 1.5-acre sky bar to floor-to-ceiling French windows opening into the forest.
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => onOpenLightbox(item.image, `${item.title} — ${item.caption}`)}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="gallery-item-overlay">
                <span>{item.category}</span>
                <h4>{item.title}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#e7c789', marginTop: '4px' }}>
                  <Eye size={13} /> Click to expand
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
