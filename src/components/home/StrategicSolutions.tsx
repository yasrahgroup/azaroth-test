import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { 
  ecommercePlatformImg, 
  mobileBankingAppImg, 
  analyticsDashboardImg, 
  creativePortfolioImg 
} from '../../assets/images';

interface ProjectItem {
  id: string;
  title: string;
  categories: string;
  image: string;
  description: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    categories: 'Web Development \u00B7 E-Commerce',
    image: ecommercePlatformImg,
    description: 'High-concurrency headless digital storefront with sub-second checkout and real-time inventory synchronization.',
    link: '/portfolio#e-commerce-platform',
  },
  {
    id: 'mobile-banking-app',
    title: 'Mobile Banking App',
    categories: 'Mobile Apps \u00B7 Fintech',
    image: mobileBankingAppImg,
    description: 'Biometric-secured iOS and Android banking app featuring instant payments, budget analytics, and multi-currency accounts.',
    link: '/portfolio#mobile-banking-app',
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    categories: 'Web App \u00B7 Business Intelligence',
    image: analyticsDashboardImg,
    description: 'Real-time telemetry and executive data warehouse dashboard processing millions of events per minute.',
    link: '/portfolio#analytics-dashboard',
  },
  {
    id: 'creative-portfolio',
    title: 'Creative Portfolio',
    categories: 'UI/UX Design \u00B7 Branding',
    image: creativePortfolioImg,
    description: 'Bespoke design portfolio and digital asset exhibition engineered with fluid micro-interactions and spatial design.',
    link: '/portfolio#creative-portfolio',
  },
];

export const StrategicSolutions: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const displayedProjects = [
    ...projects.slice(startIndex),
    ...projects.slice(0, startIndex),
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
      }}
      aria-label="Featured Projects"
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#C68A3D',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            &mdash; FEATURED PROJECTS &mdash;
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
              fontWeight: 800,
              color: '#1E293B',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #9333EA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Recent
            </span>{' '}
            Work
          </h2>

          <p
            style={{
              fontSize: '1.0625rem',
              color: '#64748B',
              lineHeight: 1.6,
            }}
          >
            Explore some of our latest projects and see how we turn ideas into impactful digital solutions.
          </p>
        </div>

        {/* Projects Grid Container with Navigation Arrows */}
        <div style={{ position: 'relative' }}>
          {/* Left Arrow Button */}
          <button
            onClick={prev}
            aria-label="Previous Project"
            style={{
              position: 'absolute',
              left: '-18px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
            }}
            className="hover:bg-slate-50 hover:scale-105 hidden sm:flex"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={next}
            aria-label="Next Project"
            style={{
              position: 'absolute',
              right: '-18px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
            }}
            className="hover:bg-slate-50 hover:scale-105 hidden sm:flex"
          >
            <ChevronRight size={18} />
          </button>

          {/* 4 Cards (2x2 grid on desktop, 1 col on mobile) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {displayedProjects.map((proj) => (
              <div
                key={proj.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-300 group"
              >
                {/* Image Container with 16:9 ratio */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '190px',
                    overflow: 'hidden',
                    backgroundColor: '#0F172A',
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 300ms ease-out',
                    }}
                    className="group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#1E293B',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {proj.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: '#64748B',
                        margin: 0,
                      }}
                    >
                      {proj.categories}
                    </p>
                  </div>

                  {/* Circular Arrow Button */}
                  <Link
                    to={proj.link}
                    aria-label={`View ${proj.title}`}
                    style={{
                      width: '2.25rem',
                      height: '2.25rem',
                      borderRadius: '50%',
                      border: '1px solid #CBD5E1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#475569',
                      flexShrink: 0,
                      transition: 'all 150ms ease-out',
                      textDecoration: 'none',
                    }}
                    className="hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/portfolio"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '1.5px solid #C68A3D',
              color: '#9A6324',
              backgroundColor: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.9375rem',
              textDecoration: 'none',
              transition: 'all 150ms ease-out',
            }}
            className="hover:bg-amber-50"
          >
            <span>Explore All Projects &amp; Platforms</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrategicSolutions;
