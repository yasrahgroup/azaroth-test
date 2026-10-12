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

export const Hero: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        paddingTop: '3.5rem',
        paddingBottom: '5rem',
      }}
      aria-label="Azaroth Tech-Hive Hero"
    >
      {/* Soft ambient gradient background blooms */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(198, 138, 61, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '-10%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headlines & CTAs (Per Client Docs) */}
          <div style={{ maxWidth: '580px' }}>
            {/* Tagline Overline */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: '#C68A3D',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
              }}
            >
              <span>Innovation</span>
              <span style={{ opacity: 0.6 }}>&bull;</span>
              <span>Technology</span>
              <span style={{ opacity: 0.6 }}>&bull;</span>
              <span>Excellence</span>
            </div>

            {/* Main Title: "Intelligence, Engineered and Innovation Unleashed." */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.85rem)',
                fontWeight: 800,
                color: '#1E293B',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.5rem',
              }}
            >
              Intelligence, Engineered and{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #A855F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Innovation
              </span>{' '}
              Unleashed.
            </h1>

            {/* Subtext (Per Client Docs) */}
            <p
              style={{
                fontSize: '1.125rem',
                color: '#64748B',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
                maxWidth: '520px',
              }}
            >
              Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions, delivering end-to-end engineering excellence that empowers businesses to innovate, adapt, and scale with confidence.
            </p>

            {/* Action Buttons: "Request for Quote" & "Our Portfolio" */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <Link
                to="/request-for-quote"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  backgroundColor: '#C68A3D',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(198, 138, 61, 0.35)',
                  transition: 'all 200ms ease-out',
                }}
                className="hover:bg-amber-600 hover:shadow-lg"
              >
                <span>Request for Quote</span>
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  color: '#475569',
                  border: '1.5px solid #CBD5E1',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  transition: 'all 200ms ease-out',
                }}
                className="hover:border-slate-400 hover:text-slate-800"
              >
                <span>Our Portfolio</span>
                <ArrowRight size={17} style={{ opacity: 0.7 }} />
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Floating Service Badges */}
          <div style={{ position: 'relative' }}>
            {/* Main Laptop Workspace Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
              }}
            >
              <img
                src={heroWorkspaceImg}
                alt="Azaroth Tech-Hive digital engineering workspace"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  maxHeight: '440px',
                }}
              />
            </div>

            {/* Floating Badge 1: Web Development */}
            <div
              style={{
                position: 'absolute',
                top: '-18px',
                left: '12%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#1E293B',
              }}
            >
              <div
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#EDE9FE',
                  color: '#7C3AED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Code2 size={13} />
              </div>
              <span>Web Development</span>
            </div>

            {/* Floating Badge 2: Mobile Apps */}
            <div
              style={{
                position: 'absolute',
                top: '-24px',
                left: '48%',
                transform: 'translateX(-20%)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#1E293B',
              }}
            >
              <div
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#D1FAE5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Smartphone size={13} />
              </div>
              <span>Mobile Apps</span>
            </div>

            {/* Floating Badge 3: Cloud Solutions */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                right: '18%',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#1E293B',
              }}
            >
              <div
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#E0F2FE',
                  color: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Cloud size={13} />
              </div>
              <span>Cloud Solutions</span>
            </div>

            {/* Floating Badge 4: UI/UX Design */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                right: '-16px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: '#1E293B',
              }}
            >
              <div
                style={{
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#FCE7F3',
                  color: '#DB2777',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PenTool size={13} />
              </div>
              <span>UI/UX Design</span>
            </div>

            {/* Floating Badge 5: Analytics Chart Widget */}
            <div
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '-12px',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '0.5rem 0.75rem',
                borderRadius: '12px',
                boxShadow: '0 10px 25px -4px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <BarChart3 size={20} style={{ color: '#2563EB' }} />
              <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '14px' }}>
                <div style={{ width: '3px', height: '6px', backgroundColor: '#38BDF8', borderRadius: '1px' }} />
                <div style={{ width: '3px', height: '10px', backgroundColor: '#6366F1', borderRadius: '1px' }} />
                <div style={{ width: '3px', height: '14px', backgroundColor: '#10B981', borderRadius: '1px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
