import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${projectData.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I am interested in YOO ONE Tower 2 Serenity (3.5 / 4.5 BHK) in NIBM Pune. Please share brochure and site visit details."
  )}`;

  return (
    <div className="fab-container" aria-label="Direct Quick Contact">
      <a 
        href={whatsappUrl}
        className="fab-btn fab-wa"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
      <a 
        href={`tel:${projectData.phone}`}
        className="fab-btn fab-call"
        aria-label="Call Sales Concierge"
        title="Call Sales Office"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
