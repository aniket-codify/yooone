import React from 'react';
import { Award, Building2, Compass, ShieldCheck } from 'lucide-react';

export default function DeveloperSection() {
  return (
    <section className="dark-section pad" id="developer">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">A Global Collective of Experts</span>
          <h2>The Visionaries Behind YOO ONE</h2>
          <p>
            When international design tastemakers join forces with India’s foremost engineering 
            and architectural masters, the outcome is an enduring real estate landmark.
          </p>
        </div>

        <div className="brand-collab-grid">
          <div className="collab-card">
            <span className="tag">Brand &amp; Interior Direction</span>
            <h3>Sussanne Khan for YOO</h3>
            <p>
              Sussanne Khan is celebrated as a premier interior designer, tastemaker, and style icon. 
              As Creative Director of Sussanne Khan for YOO, her signature style brings a sumptuous balance 
              of modern global elegance and warm natural textures to YOO ONE, making each residence a work of art.
            </p>
            <div className="collab-stats-row">
              <div className="collab-stat">
                <div className="val">YOO</div>
                <div className="lbl">Global Brand</div>
              </div>
              <div className="collab-stat">
                <div className="val">Pune · London · Bali</div>
                <div className="lbl">Global Footprint</div>
              </div>
            </div>
          </div>

          <div className="collab-card">
            <span className="tag">Development &amp; Engineering</span>
            <h3>DASSCON Powered by Tricon</h3>
            <p>
              With over 30 million square feet of vision realized, Tricon is the trusted construction force 
              behind prestigious luxury landmarks including The Ark, Panchshil Towers Kharadi, and 
              Hiranandani Fortune City. Uncompromising build quality and punctuality are Tricon’s hallmarks.
            </p>
            <div className="collab-stats-row">
              <div className="collab-stat">
                <div className="val">30M+</div>
                <div className="lbl">Sq.Ft Realised</div>
              </div>
              <div className="collab-stat">
                <div className="val">15M+</div>
                <div className="lbl">Sq.Ft In Progress</div>
              </div>
              <div className="collab-stat">
                <div className="val">Dec 2029</div>
                <div className="lbl">Committed Possession</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
