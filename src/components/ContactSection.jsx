import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Calendar, Clock, Sparkles } from 'lucide-react';
import { projectData } from '../data/projectData';

export default function ContactSection({ initialConfig = '3.5 BHK' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [config, setConfig] = useState(initialConfig);
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate enquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="cream-1 pad" id="enquire">
      <div className="wrap">
        <div className="enquiry-container">
          <div className="enquiry-img-col">
            <img src={`${import.meta.env.BASE_URL}assets/rooftop-pool.jpg`} alt="Schedule site visit at YOO ONE" loading="lazy" />
            <div className="enquiry-img-overlay">
              <span className="eyebrow" style={{ color: '#e7c789' }}>Private VIP Site Visit</span>
              <h3>Experience YOO ONE in Person</h3>
              <p>Walk through our fully furnished ready show residence and view the Sahyadri forest panorama firsthand.</p>
              <div style={{ marginTop: '16px', display: 'flex', gap: '16px', fontSize: '13px', color: '#e7c789' }}>
                <span>✓ Private Valet Parking</span>
                <span>✓ Direct Lounge Concierge</span>
              </div>
            </div>
          </div>

          <div className="enquiry-form-col">
            <span className="eyebrow" style={{ color: 'var(--gold-bright)' }}>Book an Appointment</span>
            <h2>Schedule a Visit</h2>
            <p className="sub">
              Enter your contact details below to arrange a priority appointment at the YOO ONE Sales Lounge.
            </p>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={44} style={{ margin: '0 auto 12px' }} />
                <h3>Site Visit Request Confirmed!</h3>
                <p>
                  Thank you, <b>{name}</b>. Your interest in <b>{config}</b> has been received. 
                  Our senior relationship manager will call you shortly on <b>{phone}</b> to confirm your exclusive appointment slot.
                </p>
                <div style={{ marginTop: '20px' }}>
                  <button 
                    className="btn btn-gold" 
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="enquiryForm">
                <div className="form-group">
                  <label htmlFor="fname">Full Name *</label>
                  <input
                    type="text"
                    id="fname"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fphone">Mobile Number *</label>
                  <input
                    type="tel"
                    id="fphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Phone number"
                    pattern="[0-9+ ]{8,15}"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="femail">Email Address (Optional)</label>
                  <input
                    type="email"
                    id="femail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@domain.com"
                  />
                </div>

                <div className="form-group">
                  <label>Configuration Preference</label>
                  <div className="config-btn-selector">
                    <button
                      type="button"
                      className={config === '3.5 BHK' ? 'selected' : ''}
                      onClick={() => setConfig('3.5 BHK')}
                    >
                      3.5 BHK (₹3.01 Cr+)
                    </button>
                    <button
                      type="button"
                      className={config === '4.5 BHK' ? 'selected' : ''}
                      onClick={() => setConfig('4.5 BHK')}
                    >
                      4.5 BHK (₹3.69 Cr+)
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="fdate">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    id="fdate"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-gold" 
                  style={{ width: '100%', marginTop: '10px' }}
                  disabled={loading}
                >
                  {loading ? 'Submitting Request...' : 'Confirm Site Visit Request'}
                </button>

                <p style={{ fontSize: '11px', color: 'var(--text-light-muted)', textAlign: 'center', marginTop: '12px' }}>
                  🔒 Your details remain strictly confidential and will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
