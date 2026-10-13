import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';
import logoImg from '../../assets/Logo.png';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0F141D',
        color: '#94A3B8',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
      id="site-footer"
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '500px',
          height: '200px',
          background: 'radial-gradient(ellipse at top, rgba(0, 108, 53, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '15%',
          width: '400px',
          height: '200px',
          background: 'radial-gradient(ellipse at bottom, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Left Column: Location & Contact & Policies (Per Client Docs) */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Our Location(s):
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                <MapPin size={16} style={{ color: '#818CF8', flexShrink: 0, marginTop: '0.2rem' }} />
                <span style={{ color: '#CBD5E1' }}>24, Malaviya Avenue, Thiruvanmiyur, Chennai, India</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Phone size={16} style={{ color: '#818CF8', flexShrink: 0 }} />
                <a href="tel:+916379480931" style={{ color: '#CBD5E1', textDecoration: 'none' }} className="hover:text-indigo-300">
                  +91 6379480931
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <Mail size={16} style={{ color: '#818CF8', flexShrink: 0 }} />
                <a href="mailto:hello@azaroth-techhive.com" style={{ color: '#CBD5E1', textDecoration: 'none' }} className="hover:text-indigo-300">
                  hello@azaroth-techhive.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.8125rem' }}>
              <Link to="/privacy-policy" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms-of-service" style={{ color: '#94A3B8', textDecoration: 'none' }} className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Middle Column: Quick Links (Per Client Docs) */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '0.9375rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Quick Links:
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <li>
                <Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="hover:text-indigo-300">
                  <ArrowRight size={14} style={{ color: '#818CF8' }} />
                  Explore Products
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="hover:text-indigo-300">
                  <ArrowRight size={14} style={{ color: '#818CF8' }} />
                  Explore Services
                </Link>
              </li>
              <li>
                <Link to="/technology-insights" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} className="hover:text-indigo-300">
                  <ArrowRight size={14} style={{ color: '#818CF8' }} />
                  Resource Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Logo & Follow Us on LinkedIn (Per Client Docs) */}
          <div>
            {/* Brand Logo */}
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                marginBottom: '1.5rem',
              }}
            >
              <img
                src={logoImg}
                alt="Azaroth Tech-Hive Logo"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(198, 138, 61, 0.4))',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    fontFamily: 'serif',
                    letterSpacing: '0.04em',
                    lineHeight: 1.1,
                  }}
                >
                  AZAROTH
                </span>
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    color: '#C68A3D',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                  }}
                >
                  TECH-HIVE
                </span>
              </div>
            </Link>

            <div style={{ marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginBottom: '0.75rem' }}>
                Follow Us on:
              </div>
              <a
                href="https://linkedin.com/company/azaroth-techhive"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#CBD5E1',
                  transition: 'all 180ms ease-out',
                }}
                className="hover:border-amber-400 hover:text-amber-400 hover:bg-slate-800"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright (Per Client Docs) */}
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            fontSize: '0.8125rem',
            color: '#64748B',
          }}
        >
          All rights reserved &copy; 2026 Azaroth Tech-Hive Inc
        </div>
      </div>
    </footer>
  );
};

export default Footer;
