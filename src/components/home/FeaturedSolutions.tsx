import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Settings, 
  ShieldCheck, 
  Lightbulb, 
  ArrowRight 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  link: string;
}

const services: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom, responsive and scalable websites tailored for your business needs.',
    icon: <Code2 size={24} />,
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
    link: '/services#web-development',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    description: 'Feature-rich and user-friendly apps for Android and iOS platforms.',
    icon: <Smartphone size={24} />,
    iconBg: '#D1FAE5',
    iconColor: '#059669',
    link: '/services#mobile-applications',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Secure, scalable and flexible cloud infrastructure for your business.',
    icon: <Cloud size={24} />,
    iconBg: '#E0F2FE',
    iconColor: '#0284C7',
    link: '/services#cloud-solutions',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to drive efficiency and growth.',
    icon: <Settings size={24} />,
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    link: '/services#it-consulting',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your data and business with advanced security solutions.',
    icon: <ShieldCheck size={24} />,
    iconBg: '#EDE9FE',
    iconColor: '#6D28D9',
    link: '/services#cybersecurity',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Intuitive and engaging experiences that users love.',
    icon: <Lightbulb size={24} />,
    iconBg: '#E0F2FE',
    iconColor: '#0284C7',
    link: '/services#ui-ux-design',
  },
];

export const FeaturedSolutions: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F8FAFC',
        paddingTop: '5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
      }}
      aria-label="Our Services"
    >
      <div className="container">
        {/* Section Header */}
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
            &mdash; OUR SERVICES &mdash;
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
            Comprehensive{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 60%, #9333EA 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Digital Solutions
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.0625rem',
              color: '#64748B',
              lineHeight: 1.6,
            }}
          >
            We offer end-to-end technology services to help you build, optimize and scale your digital presence.
          </p>
        </div>

        {/* 6 Services Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1.25rem',
                padding: '2rem 1.75rem',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
            >
              <div>
                {/* Squircle Icon */}
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '14px',
                    backgroundColor: item.iconBg,
                    color: item.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '1.75rem',
                  }}
                >
                  {item.description}
                </p>
              </div>

              <Link
                to={item.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#C68A3D',
                  textDecoration: 'none',
                  transition: 'gap 150ms ease-out',
                }}
                className="hover:gap-2"
              >
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSolutions;
