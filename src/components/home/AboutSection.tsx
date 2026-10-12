import React from 'react';
import { 
  Code2, 
  GitBranch, 
  Cpu, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroWorkspaceImg } from '../../assets/images';

interface CapabilityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: 'End-to-End Software Engineering',
    description: 'Design, develop, integrate, and enhance robust software applications and digital solutions that address complex business requirements, improve operational performance, and support sustainable growth.',
    icon: <Code2 size={22} />,
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
  },
  {
    title: 'Technology Modernization & Evolution',
    description: 'Enhance existing systems, improve technical foundations, streamline development practices, and evolve software environments to strengthen reliability, maintainability, adaptability, and long-term business value.',
    icon: <GitBranch size={22} />,
    iconBg: '#D1FAE5',
    iconColor: '#059669',
  },
  {
    title: 'Business Process Optimization & Automation',
    description: 'Transform business processes through intelligent workflow design, system integration, and targeted automation that reduces manual effort, improves operational efficiency, strengthens data consistency, and enables informed decision-making.',
    icon: <Cpu size={22} />,
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
  },
  {
    title: 'Dedicated Engineering & Delivery Teams',
    description: 'Extend your capabilities with skilled, cross-functional engineering professionals who collaborate with your organization to accelerate development, address technical challenges, maintain quality, and deliver on strategic objectives.',
    icon: <Users size={22} />,
    iconBg: '#E0F2FE',
    iconColor: '#0284C7',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="who-we-are"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '5.5rem',
        paddingBottom: '5.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Who We Are"
    >
      <div className="container">
        {/* Main Split: One Side Description, One Side Image */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left Column: Image with stylish framing */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12)',
                border: '1px solid rgba(226, 232, 240, 0.9)',
              }}
            >
              <img
                src={heroWorkspaceImg}
                alt="Azaroth Tech-Hive Engineering Team"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Right Column: Copy per Client Docs */}
          <div style={{ maxWidth: '620px' }}>
            <h2
              style={{
                fontSize: 'clamp(2.25rem, 4.2vw, 3.25rem)',
                fontWeight: 800,
                color: '#1E293B',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Engineering Software.{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #9333EA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Enabling Progress.
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              Azaroth Tech-Hive delivers practical software engineering solutions that help businesses overcome technical challenges, improve operations, and turn ideas into dependable digital products. We work across the software lifecycle&mdash;from developing applications and integrating systems to enhancing existing solutions and addressing complex technical requirements. Our approach combines thoughtful problem-solving, sound engineering principles, and a clear understanding of each project&apos;s goals.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: '#475569',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              From initial discovery and solution design to development, testing, deployment, and ongoing support, we focus on building software that is reliable, secure, maintainable, and ready to evolve. We prioritise code quality, performance, usability, and long-term adaptability, ensuring every solution serves a meaningful purpose without introducing unnecessary complexity. Whether creating something new or improving what already exists, we help businesses make better use of technology and build a strong foundation for future opportunities.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: '#C68A3D',
                  textDecoration: 'none',
                }}
                className="hover:gap-3"
              >
                <span>Read more about our vision &amp; values</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Capabilities ("Try Dynamic Design") */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '1.25rem',
                  padding: '2rem 1.75rem',
                  border: '1px solid rgba(226, 232, 240, 0.9)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 240ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 hover:bg-white"
              >
                <div
                  style={{
                    width: '3.25rem',
                    height: '3.25rem',
                    borderRadius: '12px',
                    backgroundColor: cap.iconBg,
                    color: cap.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  {cap.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#1E293B',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.9375rem',
                    color: '#64748B',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic & Responsive Metrics / Trust Banner ("Try NewDesign") */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            border: '1px solid rgba(198, 138, 61, 0.35)',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.25)',
            color: '#FFFFFF',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Metric 1 */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#C68A3D',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: 'serif',
                }}
              >
                95%
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Client Satisfaction
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Focused on client expectations and outcomes
              </div>
            </div>

            {/* Metric 2 */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#10B981',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: 'serif',
                }}
              >
                100%
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Commitment to Quality
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Quality-driven engineering practices
              </div>
            </div>

            {/* Metric 3 */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  color: '#38BDF8',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: 'serif',
                }}
              >
                90%
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                On-Time Delivery
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
                360&deg; Software Engineering
              </div>
            </div>

            {/* Metric 4 */}
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#A855F7',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  fontFamily: 'serif',
                }}
              >
                Long-Term
              </div>
              <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                Client Partnerships
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.5 }}>
                Built around continuity and evolving needs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
