import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import logoImg from '../../assets/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--color-canvas-dark)',
      color: 'var(--color-text-inverse)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden',
    }} id="site-footer">
      {/* Subtle ambient maroon/gold glow inside footer */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-100px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(122, 12, 22, 0.22) 0%, rgba(122, 12, 22, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0) 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ paddingTop: '4.5rem', paddingBottom: '3.5rem', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3.5rem',
          marginBottom: '3.5rem',
        }}>
          
          {/* Left Column: Location & Contact & Policies */}
          <div>
            <h4 style={{ color: 'var(--color-gold-from)', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Our Location(s)
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', color: 'var(--color-text-inverse-muted)', fontSize: '0.9375rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-gold-from)', flexShrink: 0, marginTop: '0.2rem' }} />
                <span>24, Malaviya Avenue, Thiruvanmiyur, Chennai, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: 'var(--color-gold-from)', flexShrink: 0 }} />
                <a href="tel:+916379480931" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">
                  +91 6379480931
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} style={{ color: 'var(--color-gold-from)', flexShrink: 0 }} />
                <a href="mailto:hello@azaroth-techhive.com" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">
                  hello@azaroth-techhive.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--color-text-inverse-muted)' }}>
              <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }} className="footer-link">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h4 style={{ color: 'var(--color-gold-from)', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li>
                <Link to="/products" style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9375rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="footer-link">
                  <ArrowRight size={14} style={{ color: 'var(--color-gold-from)' }} />
                  Explore Products
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9375rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="footer-link">
                  <ArrowRight size={14} style={{ color: 'var(--color-gold-from)' }} />
                  Explore Services
                </Link>
              </li>
              <li>
                <Link to="/technology-insights" style={{ color: 'var(--color-text-inverse-muted)', fontSize: '0.9375rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="footer-link">
                  <ArrowRight size={14} style={{ color: 'var(--color-gold-from)' }} />
                  Resource Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Logo & Socials */}
          <div>
            {/* Azaroth Brand Logo */}
            <Link 
              to="/" 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', marginBottom: '1.5rem' }}
              id="footer-brand-logo"
            >
              <img
                src={logoImg}
                alt="Azaroth Tech-Hive Logo"
                style={{
                  width: '3.1rem',
                  height: '3.1rem',
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'drop-shadow(0 4px 14px rgba(212, 175, 55, 0.4)) drop-shadow(0 2px 6px rgba(122, 12, 22, 0.6))',
                  transition: 'transform var(--transition-fast)',
                }}
                className="brand-logo-img"
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                  Azaroth
                </span>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-gold-from)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Tech-Hive
                </span>
              </div>
            </Link>

            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text-inverse-muted)', display: 'block', marginBottom: '0.75rem' }}>
                Follow Us on:
              </span>
              <a 
                href={companyInfo.socialLinks[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold-from)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  transition: 'all 200ms ease-out'
                }}
                className="social-icon"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright Only */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center',
          fontSize: '0.875rem',
          color: 'var(--color-text-inverse-muted)',
        }}>
          All rights reserved © 2026 Azaroth Tech-Hive Inc
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--color-gold-from) !important;
        }
        .social-icon:hover {
          background-color: var(--color-primary-maroon) !important;
          color: #ffffff !important;
          border-color: var(--color-primary-maroon) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(122, 12, 22, 0.35);
        }
      `}</style>
    </footer>
  );
};
