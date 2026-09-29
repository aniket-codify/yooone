import React from 'react';
import { projectData } from '../data/projectData';

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Key Project Statistics">
      <div className="wrap">
        <div className="stats-grid">
          {projectData.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="num">{stat.num}</div>
              <div className="lbl">{stat.label}</div>
              <p className="desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
