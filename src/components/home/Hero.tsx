import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroWorkspaceImg } from '../../assets/images';
import { PageHeader } from '../common/PageHeader';

export const Hero: React.FC = () => {
  return (
    <>
      <PageHeader
        kicker="- HOME -"
        title="Innovation Technology Excellence"
        gradientWords={['Innovation', 'Technology', 'Excellence']}
        subtitle="Azaroth Tech-Hive engineers, evolves, and sustains intelligent software solutions, delivering end-to-end engineering excellence that empowers businesses to innovate, adapt, and scale with confidence."
        actions={
          <>
            <Link
              to="/request-for-quote"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.875rem 1.75rem',
                borderRadius: '9999px',
                backgroundColor: '#4338CA',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(67, 56, 202, 0.3)',
                transition: 'all 200ms ease-out',
              }}
              className="hover:bg-indigo-800 hover:shadow-lg"
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
                color: '#1E293B',
                border: '1.5px solid #E0E7FF',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'all 200ms ease-out',
              }}
              className="hover:border-amber-400 hover:text-amber-900 hover:bg-amber-50"
            >
              <span>Our Portfolio</span>
              <ArrowRight size={17} style={{ opacity: 0.7 }} />
            </Link>
          </>
        }
      />

      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          paddingTop: '1rem',
          paddingBottom: '5rem',
        }}
        aria-label="Azaroth Tech-Hive Hero"
        className="home-hero-content"
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            {/* Hero Visual with Floating Service Badges */}
            <div className="hero-visual" style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
              {/* Main Laptop Workspace Image */}
              <div
                style={{
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
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
