import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Cloud, 
  PenTool, 
  BarChart3 
} from 'lucide-react';
import { heroWorkspaceImg } from '../../assets/images';
import { useCMS } from '../../context/CMSContext';

export const Hero: React.FC = () => {
  const { pages } = useCMS();
  const pageData = pages['home'];
  const content = pageData?.content || {};

  const kicker = content.heroKicker || 'INNOVATION · TECHNOLOGY · EXCELLENCE';
  const ctaServicesText = content.ctaServicesText || 'Explore Our Services';
  const ctaContactText = content.ctaContactText || 'Contact Us';

  return (
    <section
      style={{
        backgroundColor: 'var(--color-canvas-bg, #FFFFFF)',
        paddingTop: '4.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Hero Section"
    >
      {/* Subtle organic ambient aura matching reference */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-primary-glow, rgba(24, 24, 27, 0.05)) 0%, var(--color-brand-gold-light, rgba(245, 158, 11, 0.04)) 40%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--color-brand-gold-light, rgba(245, 158, 11, 0.03)) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Copy & Actions */}
          <div style={{ maxWidth: '580px' }}>
            {/* Upper Kicker */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-brand-gold, #F59E0B)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              {kicker}
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 5.2vw, 4rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary, #0F172A)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Technology That{' '}
              <span
                style={{
                  background: 'var(--gradient-brand, linear-gradient(135deg, var(--color-primary, #18181B) 0%, var(--color-accent, #7C3AED) 50%, var(--color-brand-gold, #F59E0B) 100%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Empowers
              </span>{' '}
              Your Vision
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '1.125rem',
                color: 'var(--color-text-secondary, #475569)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
                maxWidth: '520px',
              }}
            >
              We design and build innovative digital solutions that help businesses grow, adapt and lead in a digital world.
            </p>

            {/* CTA Buttons Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Primary Action Button (Solid Pill in Secondary/Gold or Primary) */}
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.9rem 1.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-brand-gold, #F59E0B)',
                  color: 'var(--color-gold-button-text, #FFFFFF)',
                  fontWeight: 600,
                  fontSize: '0.975rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px -2px var(--color-brand-gold-shadow, rgba(245, 158, 11, 0.35))',
                  transition: 'all 200ms ease-out',
                }}
                className="hover:scale-105 hover:opacity-95"
              >
                <span>{ctaServicesText}</span>
                <ArrowRight size={17} />
              </Link>

              {/* Secondary Action Button (Outline Pill in Secondary/Gold) */}
              <Link
                to="/connect-with-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  backgroundColor: 'transparent',
                  color: 'var(--color-brand-gold-text, var(--color-brand-gold, #F59E0B))',
                  border: '1.5px solid var(--color-brand-gold, #F59E0B)',
                  fontWeight: 600,
                  fontSize: '0.975rem',
                  textDecoration: 'none',
                  transition: 'all 200ms ease-out',
                }}
                className="hover:bg-amber-50 hover:bg-opacity-20"
              >
                <span>{ctaContactText}</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Desk Laptop & Connected Badges */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Main Laptop Desk Showcase Image */}
            <div
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px -12px rgba(15, 23, 42, 0.15)',
                border: '1px solid var(--color-border, rgba(226, 232, 240, 0.9))',
                maxWidth: '560px',
                width: '100%',
              }}
            >
              <img
                src={heroWorkspaceImg}
                alt="Azaroth Tech-Hive Enterprise Engineering Workspace"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '410px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* SVG Connecting Paths to the Laptop Mockup */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 3,
                pointerEvents: 'none',
                overflow: 'visible',
              }}
            >
              <defs>
                <linearGradient id="trace1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="trace2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0D9488" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0D9488" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="trace3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284C7" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#0284C7" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 120 10 Q 150 70 240 160"
                fill="none"
                stroke="url(#trace1)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 280 15 Q 280 80 320 160"
                fill="none"
                stroke="url(#trace2)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 440 20 Q 400 80 360 160"
                fill="none"
                stroke="url(#trace3)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Floating Tech Squircle Badges matching reference */}
            {/* 1. Web Development */}
            <div
              style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '6%',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 20px -4px rgba(124, 58, 237, 0.15)',
              }}
              className="animate-pulse"
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={16} />
              </div>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1E293B' }}>
                Web Development
              </span>
            </div>

            {/* 2. Mobile Apps */}
            <div
              style={{
                position: 'absolute',
                top: '-2.25rem',
                left: '42%',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 20px -4px rgba(13, 148, 136, 0.15)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#0D9488',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Smartphone size={16} />
              </div>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1E293B' }}>
                Mobile Apps
              </span>
            </div>

            {/* 3. Cloud Solutions */}
            <div
              style={{
                position: 'absolute',
                top: '-1.25rem',
                right: '12%',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 20px -4px rgba(2, 132, 199, 0.15)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#0284C7',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Cloud size={16} />
              </div>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1E293B' }}>
                Cloud Solutions
              </span>
            </div>

            {/* 4. UI/UX Design */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                right: '-1.5rem',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 20px -4px rgba(225, 29, 72, 0.15)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#E11D48',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PenTool size={16} />
              </div>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1E293B' }}>
                UI/UX Design
              </span>
            </div>

            {/* 5. Analytics Mini Card */}
            <div
              style={{
                position: 'absolute',
                top: '55%',
                right: '-0.75rem',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.85rem',
                borderRadius: '12px',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 8px 20px -4px rgba(6, 182, 212, 0.15)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  backgroundColor: '#06B6D4',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BarChart3 size={16} />
              </div>
              <span style={{ fontSize: '0.775rem', fontWeight: 700, color: '#1E293B' }}>
                Analytics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
