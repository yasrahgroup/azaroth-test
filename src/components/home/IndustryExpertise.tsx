import React from 'react';
import { motion } from 'framer-motion';
import { industryExpertiseData } from '../../data/industryData';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { ShoppingBag, GraduationCap, HeartPulse, Truck, Layers } from 'lucide-react';

export const IndustryExpertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      ShoppingBag: <ShoppingBag size={28} />,
      GraduationCap: <GraduationCap size={28} />,
      HeartPulse: <HeartPulse size={28} />,
      Truck: <Truck size={28} />,
      Layers: <Layers size={28} />,
    };
    return icons[iconName] || <Layers size={28} />;
  };

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}
        >
          <Badge variant="gold" style={{ marginBottom: '1rem' }}>
            Industry Expertise
          </Badge>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--color-dark-maroon)' }}>
            Our Specialised Engineering Across Diverse Industries
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
            We bring deep domain expertise and technical excellence to deliver tailored solutions across multiple industries, addressing unique challenges with proven engineering approaches.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {industryExpertiseData.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card
                variant="solid"
                padding="lg"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(122, 12, 22, 0.1)',
                  transition: 'all 180ms ease-out',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(122, 12, 22, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(122, 12, 22, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(122, 12, 22, 0.08)',
                  color: 'var(--color-primary-maroon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  {getIcon(industry.iconName)}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-dark-maroon)', marginBottom: '0.5rem' }}>
                  {industry.industry}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-primary-maroon)', fontWeight: 600, marginBottom: '1.25rem' }}>
                  {industry.subtitle}
                </p>

                <div style={{
                  backgroundColor: 'rgba(122, 12, 22, 0.04)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(122, 12, 22, 0.08)',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-maroon)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.5rem',
                  }}>
                    Operational & Business Challenge
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {industry.challenge}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.06)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  marginBottom: '0.75rem',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#996e00',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.5rem',
                  }}>
                    Implemented Architecture
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {industry.architecture}
                  </div>
                </div>

                <div style={{
                  backgroundColor: 'rgba(122, 12, 22, 0.04)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(122, 12, 22, 0.08)',
                  marginTop: 'auto',
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-maroon)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    marginBottom: '0.5rem',
                  }}>
                    Final Outcome
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                    {industry.outcome}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
